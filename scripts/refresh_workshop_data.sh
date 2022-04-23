#!/bin/bash
mkdir -p wsapp-data
IDS=$( node -e 'require("./wsapp-data/index.json").forEach(c => console.log(c.path_id) )')

for ID in $IDS; do
  URL=$( node -e 'require("./wsapp-data/index.json").forEach(c => c.path_id == "'$ID'" ? console.log(c.structure_csv_url||"") : "")');

  if [ -z "$URL" ]; then
    echo "Skipping fetch for for $ID.."
    continue;
  fi

  echo "Fetching data for $ID.."
  curl -L -s "$URL" > "$ID.csv.tmp"

  SANITYCHECK=$(grep "step_type" $ID.csv.tmp)
  if [ "$SANITYCHECK" = "" ]; then
    echo "Failed to fetch content for $ID! Using backup data..";
    rm "$ID.csv.tmp"
  else
    echo "Data fetched succesfully"
    mv "$ID.csv.tmp" "./wsapp-data/$ID.csv"
  fi
done