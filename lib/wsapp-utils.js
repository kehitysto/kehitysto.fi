import lzjs from 'lzjs';
import Pusher from 'pusher-js';

const noRedirectPages = ['index', 'share', 'enter'];

import Router from 'next/router'
import React from 'react';

let realtimeData = {};
let realtimeDataUpdater = false;

const moveToWorkshopStep = ( dynamicData, courseContent, step ) => {
  const { query, pathname } = Router;

  const courseStep = courseContent.find( s => s.id+"" === step+"");
  const lastStepId = query.step;

  delete query.scroll;
  delete query.step;

  if ( ! courseStep ) {
    query.wspath.splice(1, 2, 'welcome', '');
    recordUserAction( dynamicData, { step_type : 'return' } );
  }
  else {
    query.wspath.splice(1, 2, courseStep.step_type, '');
    query.step = courseStep.id;
    recordUserAction( dynamicData, {}, courseStep );
  }

  Router.push( { pathname, query } )
};

const recordInitialUserAction = ( dynamicData ) => {
  if ( ! dynamicData.stepId ) {
    recordUserAction( dynamicData, { step_type : 'enter' } );
  }
  else {
    recordUserAction( dynamicData, {}, dynamicData.currentStep );
  }
}

const recordUserAction = ( dynamicData, data, step ) => {
  const newData = Object.assign( {}, realtimeData );
  const idx = dynamicData.userIndex;

  if ( ! newData[idx] ) {
    newData[idx] = {};
  }
  else {
    newData[idx].last_action = newData[idx].current_action;
  }

  const stepData = step ? { id : step.id, step : step.step, step_type : step.step_type, section : step.section, video_text : step.video_text ? 1 : 0 } : {};
  const defaultData = { local_now : Date.now() }
  newData[idx].current_action = Object.assign( {}, defaultData, stepData, data || {} );

  publishCurrentAction( dynamicData, newData );

  setRealtimeData( newData );
}

const setRealtimeData = ( value ) => {
  realtimeData = value;
  if ( realtimeDataUpdater ) realtimeDataUpdater( value );
};

const pusherSubscribed = {};
const pusherSubscribing = {};

const publishCurrentAction = ( dynamicData, currentRealtimeData ) => {
  const idx = dynamicData.userIndex;
  const shield = dynamicData.shield;

  if ( ! shield ) return;
  const action = Object.assign( {}, currentRealtimeData[idx] || {} );

  if ( pusherSubscribed[shield] ) {
    pusherSubscribed[shield].trigger('client-action-broadcast', Object.assign( action, { idx, now : Date.now() } ) );
  }
  else if ( ! pusherSubscribing[shield] ) {
    const pusher = new Pusher('f1ca90a8cdee103a6a44', {
      cluster: 'eu',
      authEndpoint: 'https://script.google.com/macros/s/AKfycbx0BKAo4u7RxipKRBQVYshIn9QHAFy-sLgEXP2jz0jvOjeWhEI/exec',
      authTransport: 'jsonp',
      auth: { params : { action : 'pusher_auth', user_id : idx } },
    } );
    const channel = pusher.subscribe('presence-kehitysto-' + shield);

    pusherSubscribing[shield] = channel;

    channel.bind('pusher:subscription_succeeded', () => {
      pusherSubscribed[shield] = channel;
      channel.trigger('client-request-broadcast', {} );
      channel.trigger('client-action-broadcast', Object.assign( realtimeData[idx] || currentRealtimeData[idx] || {}, { idx, now : Date.now() } ) );
      delete pusherSubscribing[shield];
    } );

    channel.bind('client-request-broadcast', () => {
      channel.trigger('client-action-broadcast', Object.assign( realtimeData[idx] || {}, { idx, now : Date.now() } ) );
    } );

    channel.bind('client-action-broadcast', ( data ) => {
      const newData = Object.assign( {}, realtimeData );
      const idx = data.idx;
      const oldAction = newData[idx] || {};

      if ( ( oldAction.local_now || 0 ) >= data.local_now ) return;

      newData[idx] = data;
      setRealtimeData( newData );
    } );
  }
}

const calculateStepSeconds = ( step, dynamicData, realtimeData ) => {
  if ( ! step.duration ) return 0;

  let duration = Number( step.duration ) + dynamicData.participants.length * Number( step.per_participant_duration || 0 );

  if ( realtimeData ) {

  }

  return duration;
}

export default {
  calculateStepSeconds,
  recordInitialUserAction,
  recordUserAction,
  setRealtimeData,

  setRealtimeDataUpdater : updater => realtimeDataUpdater = updater,

  checkRedirects : () => {
    if ( Router.query.g && ! localStorage.getItem( 'kehitysto-wsapp-user-index-' + Router.query.g ) ) {
      const { query, pathname } = Router;

      if ( query.wspath && query.wspath[1] && noRedirectPages.indexOf( query.wspath[1] ) > -1 ) return false;

      localStorage.setItem('kehitysto-wsapp-redirect-data-' + query.g, JSON.stringify( {
        query,
        time : Date.now(),
      } ) );

      query.wspath.splice(1, 2, 'enter', '');
      delete query.step;

      Router.push( { pathname, query } )
      return true;
    }
    return false;
  },

  takeNextWorkshopStep : ( dynamicData, courseContent ) => {
    let courseStep, found = false;

    courseContent.forEach( (s) => {
      if ( found && courseStep ) return;
      if ( found ) courseStep = s;
      else if ( s.id == dynamicData.stepId ) found = true;
    } );

    moveToWorkshopStep( dynamicData, courseContent, courseStep ? courseStep.id : 0 );
  },

  moveToWorkshopStep,

  moveToEntryStep : ( step ) => {
    const { query, pathname } = Router;
    query.wspath.splice(1, 2, step, '');
    Router.push( { pathname, query } )
  },

  createNewGroupData : (participants) => {
    const randomShield = (Math.random().toString(36)+'000000').slice(2, 8);
    const cleanParticipants = participants.map( p => p.replaceAll(';','') );
    const groupString = randomShield + cleanParticipants.join(";");
    return lzjs.compressToBase64(groupString).replace(/\=+$/,'');
  },

  extractDynamicData : ( courseContent ) => {
    const stepId = Router.query.step || '';
    const scroll = Router.query.scroll || 0;
    const currentStep = courseContent.find( s => s.id == stepId ) || {};

    const data = {
      scroll, stepId, currentStep, participants : []
    }

    if ( Router.query.g ) {
      const groupDataString = lzjs.decompressFromBase64(Router.query.g);

      data.shield = groupDataString.slice(0,6);
      data.participants = groupDataString.slice(6).split(';');
      data.userIndex = localStorage.getItem( 'kehitysto-wsapp-user-index-' + Router.query.g );
    }

    return data;
  },

  MsToTimeString : ( left_ms )  => {
    if ( left_ms < 0 ) return '0:00';
    var left_min = Math.floor( left_ms / 60000 );
    var left_s = Math.floor( ( left_ms % 60000 ) / 1000 );
    if (left_s < 10) left_s = "0"+left_s;
    return left_min + ':' + left_s;
  },

  formatTimeLeftStatus : ( left ) => {
    var time_left = Math.floor( ( left + 30 ) / 60 ) + ' minuuttia';
    if ( left < 100 ) time_left = ( Math.floor( left / 10 ) * 10 ) + ' sekuntia';
    if ( left < 10 ) time_left = Math.floor( left ) + ' sekuntia';
    return time_left;
  },

  getRealtimeData : () => {
    return realtimeData || {};
  },
}