const csvWriter = require("csv-writer");
const path = require("path");
const fs = require("fs");

var leagues = JSON.parse(fs.readFileSync("./data.json").toString());

const writer = csvWriter.createObjectCsvWriter({
  path: path.resolve(__dirname, "juan_mata_league.csv"),
  header: [
    { id: "name", title: "Name" },
    { id: "total", title: "Points" },
  ],
});

const get_member_total = (id) => {
  return fetch(`https://fantasy.premierleague.com/api/entry/${id}/history/`)
    .then((res) => res.text())
    .then((body) => JSON.parse(body).current.pop().total_points);
};

const get_league_total = async (league) => {
  let total = 0;
  for (const id of league.ids) {
    const t = await get_member_total(id);
    total = total + t;
  }

  return {
    total,
    name: league.name,
  };
};

const get_data = async (leagues) => {
  const r = [];
  for (const league of leagues) {
    const d = await get_league_total(league);
    r.push(d);
    console.log(leagues.indexOf(league));
  }

  writer.writeRecords(r).then(() => {
    console.log("Done!");
  });
};

get_data(leagues);
