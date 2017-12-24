import axios from 'axios'

const API = {
  players: {
    async getPlayers () {
      const baseURL = 'https://swapi.co/api/people/?format=json&page='
      const {data} = await axios('https://swapi.co/api/people/?format=json')
      const playerPages = Math.round(data.count / 10)
      const players = []
      for (let i = 1; i < playerPages + 1; i++) {
        const {data} = await axios(baseURL + i)
        data.results.forEach(player => {
          const {name, vehicles} = player
          const newPlayer = {
            name,
            vehicles
          }
          players.push(newPlayer)
        })
      }
      const filteredPlayers = await players.filter(player => player.vehicles.length)
      const list = await filteredPlayers.map(async player => {
        const vehiclesCall = await player.vehicles.map(async vehicle => {
          const {data} = await axios.get(vehicle)
          return data
        })
        const vehicles = await Promise.all(vehiclesCall)
        player.vehicles = await vehicles
        return player
      })
      const response = Promise.all(list)
      return response
    }
  }
}

export default API
