let friend = ['Agung', 'Kevin', 'Ciomas', 'Laras', 'Anggi', 'Bunga']

let team1 = friend.slice(0, 3)
let team2 = friend.slice(3, 6)

let leaderTeam1 = team1[0]
let leaderTeam2 = team2[0]

document.write(`<p>${leaderTeam1} adalah leader team ke -1</p></h2>`)
team1.forEach((element) => {
  document.write(`<li>${element}</li>`)
})

document.write(`<p>${leaderTeam2} adalah leader team ke -2</p>`)
team2.forEach((element) => {
  document.write(`<li>${element}</li>`)
})
