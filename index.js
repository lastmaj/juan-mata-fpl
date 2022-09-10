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

get_data(leagues)
