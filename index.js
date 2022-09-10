const csvWriter = require('csv-writer')
const path = require('path')

const leagues = require('./leagues_data')

const writer = csvWriter.createObjectCsvWriter({
  path: path.resolve(__dirname, 'juan_mata_league.csv'),
  header: [
    { id: 'name', title: 'Name' },
    { id: 'total', title: 'Points' },
  ],
})

const get_member_total = (member) => {
  return fetch(
    `https://fantasy.premierleague.com/api/entry/${member.id}/history/`,
  )
    .then((res) => res.text())
    .then((body) => JSON.parse(body).current.pop().total_points)
}

const get_league_total = async (league) => {
  let total = 0
  for (const m of league.members) {
    const t = await get_member_total(m)
    total = total + t
  }

  return {
    total,
    name: league.name,
  }
}

const get_data = async (leagues) => {
  const r = []
  for (const league of leagues) {
    const d = await get_league_total(league)
    r.push(d)
  }

  writer.writeRecords(r).then(() => {
    console.log('Done!')
  })
}

// get_data(leagues)
const leagueIds = [
  483641,
  506096,
  596540,
  529011,
  483741,
  574798,
  507071,
  469897,
  557736,
  394676,
  1210572,
  571697,
  540384,
  1092050,
  484066,
  517846,
  507133,
  483843,
  606829,
  498996,
  484076,
  506631,
  483734,
  483965,
  626468,
  484357,
  574528,
  575562,
  506955,
  510988,
  503933,
  486906,
  502362,
  507000,
  562880,
  517687,
  571782,
  483898,
  507177,
  518033,
  572605,
  597112,
  513391,
  338822,
  577149,
  863672,
  727957,
  1628295,
  531382,
  506786,
  1209244,
  496203,
  538444,
  483689,
  610494,
  517850,
  484013,
  1288707,
  549898,
  591009,
  501251,
  458421,
  600634,
  545873,
  495573,
  623547,
  490697,
  577131,
  483520,
  508394,
  513891,
  484260,
  810557,
  535291,
  498283,
  1377812,
  1695459,
  528007,
  531228,
  571463,
  529483,
  512609,
  506253,
  604161,
  529335,
  520426,
  483802,
  557609,
  484257,
  487431,
  483664,
  486440,
  483377,
  531705,
  649761,
  494083,
  485415,
]

const get_league = (id) => {
  return fetch(
    `https://fantasy.premierleague.com/api/leagues-classic/${id}/standings`,
  )
    .then((res) => res.json())
    .then((data) => ({
      name: data.league.name,
      ids: data.standings.results.map((r) => r.entry),
    }))
    .catch((e) => console.log('invalid'))
}

const get_leagues_names = async (ids) => {
  const data = []
  for (const id of ids) {
    const leagueData = await get_league(id)
    if (
      leagueData === undefined ||
      leagueData.name === undefined ||
      leagueData.ids === undefined ||
      leagueData.ids.length > 5
    )
      continue
    data.push(leagueData)
  }

  console.log(data)
}

get_leagues_names(leagueIds)
