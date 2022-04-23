import BasicLayout from '../layouts/site-simple-page';
import Link from 'next/link';

const title = 'Tule mukaan!';

export default function Page() {
  return (
    <BasicLayout title={title}>
      <div>
          <div className="bigtext">
          
            <p>
            Kehitystön yhteisön keskeisin toimintamuoto on työpajat, mutta meillä on myös muuta toimintaa!
            </p>
          
          </div>
          
          <h1>Tulevat Kehitystön tapahtumat</h1>
          
          <div id="upcomingEvents">
              <div id="upcomingEventsList"><p>Olemme lomalla! Lisää tapahtumia pian!</p></div>
          </div>
          
          <p><br/></p>
          
          <p>Tarkemmat tiedot kaikista Kehitystön menneistä ja tulevista tapahtumista löydät aina Facebookista: <a href="https://fb.com/kehitysto/events">fb.com/kehitysto/events</a></p>
          
          <p>Tapahtumat on saatavilla myös <a href="https://calendar.google.com/calendar/embed?src=dicole.com_039gf89vaqmnrbcti459ueu2tg%40group.calendar.google.com&amp;ctz=Europe%2FHelsinki">Google Calendar -muodossa</a>.</p>
          
          <h1>Vapaammat tapaamisen</h1>
          
          <p>Kehitystö järjestää säännöllisesti Helsingin seudulla tapahtumia, joihin voi liittyä mukaan ilman erityistä osaamista. Tapahtumien joukkoon mahtuu yhdessä meditointia, lukupiirejä, avoimeen hallitustyöskentelyyn osallistumista ja erilaista työryhmätoimintaa. Parhaiten tiedon uusimmista tapahtumista saa liittymällä <a href="https://www.facebook.com/groups/kehitystonyhteiso/">Kehitystön yhteisön Facebook -ryhmään</a>.</p>
          
          <h1>Työpajat</h1>
          
          <p>Myös työpajaan osallistuminen on erinomainen tapa tutustua toimintaan ja päästä juttelemaan toimintaa organisoivien ihmisten kanssa. Työpajojen materiaalit löydät tämän sivuston <Link href="/materiaalit/"><a>Materiaalit -osiosta</a></Link>.</p>
          
          <h1>Vertaisohjaus</h1>
          
          <p>Vertaisohjaus on Kehitystöön jo hieman paremmin tutustuneille ihmisille tarkoitettu väline oman hyvinvoinnin tavoitteiden seuraamiseen ja edistämiseen. Vertaisohjauksessa osallistujat ottavat vuorotellen joko ohjaajan tai ohjattavan roolin, ja yhteisiä ohjeita noudattamalla ohjaajan kysymykset auttavat ohjattavaa sekä täsmentämään tavoitteitaan että löytämään keinot vastaan tulevien esteiden kaatamiseksi. Vertaisohjausta voi tehdä joko oman parin kanssa itsenäisesti, tai osallistumalla <Link href="/kokoontuminen-ryhmavertaisohjaus"><a>ryhmävertaisohjaustapaamisiin</a></Link>.</p>
          
          <p>Jos vertaisohjaus kiinnostaa, tule rohkeasti mukaan toimintaan ja kysele aktiiveilta kuka voi tällä hetkellä auttaa sinua eteenpäin!</p>
          
          
          <script type="text/javascript" async={false} src="https://www.google-analytics.com/analytics.js"></script>
          {/*<script type="text/javascript" async={false} src="https://apis.google.com/_/scs/abc-static/_/js/k=gapi.lb.en.NnK9YPjtg-w.O/m=client/rt=j/sv=1/d=1/ed=1/rs=AHpOoo9KePDGVlGjp-rlXwDM1kUO2Eh4gg/cb=gapi.loaded_0?le=scs"></script>*/}
          <script dangerouslySetInnerHTML={{
              __html: `
            function initGoogleClientLoad() {
              gapi.client.init({
                apiKey: "AIzaSyAhySkvP4lURnadwmZKwLUUCsDPrZ_7Ejs"
              }).then(function () {
                fetchCalendarEntries();
              }, function(error) {
                console.log(JSON.stringify(error, null, 2));
              })
            }
          
          function fetchCalendarEntries() {
            gapi.client.load('calendar', 'v3', function() {
              gapi.client.calendar.events.list({
                  'calendarId': 'dicole.com_039gf89vaqmnrbcti459ueu2tg@group.calendar.google.com',
                  'timeMin': (new Date()).toISOString(),
                  'showDeleted': false,
                  'singleEvents': true,
                  'maxResults': 100,
                  'orderBy': 'startTime'
                }).then(function(response) {
                  $("#upcomingEventsList").empty();
                  response.result.items.forEach(function(e) {
                      var d = new Date( e.start.dateTime );
                      var string = d.getDate()+"."+(d.getMonth()+1)+ ". klo "+d.getHours()+": "+e.summary;
                      var stub = $('<div class="eventsListEntry"><a></a></div>');
                      $("a", stub).attr('href', e.description);
                      $("a", stub).text( string );
                      $("#upcomingEventsList").append( stub );
                  });
                  if (response.result.items.length < 1) {
                    $("#upcomingEventsList").append( $("<p>Olemme lomalla! Lisää tapahtumia pian!</p>") );
                  }
                  $("#upcomingEvents").height( $("#upcomingEventsList").height() );
                });
            } )
          }
          `}} />
          
      </div>
    </BasicLayout>
  );
}
