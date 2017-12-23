import fetch from 'isomorphic-fetch'

const API = {
  players: {
    async getPlayers () {
      const baseURL = 'https://swapi.co/api/people/?format=json&page='
      const response = await fetch('https://swapi.co/api/people/?format=json')
      const data = await response.json()
      const playerPages = Math.round(data.count / 10)
      const players = []
      for (let i = 1; i < playerPages + 1; i++) {
        const response = await fetch(baseURL + i)
        const data = await response.json()
        data.results.forEach(player => {
          const {name, vehicles} = player
          const newPlayer = {
            name,
            vehicles
          }
          players.push(newPlayer)
        })
      }
      const filteredPlayers = players.filter(player => player.vehicles.length)
      const list = [...filteredPlayers]
      console.log(list)
      return list
    }
  }
}

export default API
