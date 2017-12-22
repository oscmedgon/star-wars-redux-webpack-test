import axios from 'axios'

const players = async (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PLAYERS': {
      const baseURL = 'https://swapi.co/api/people/?format=json&page='
      const {data} = await axios.get('https://swapi.co/api/people/?format=json')
      const playerPages = data.count / 10
      const players = []
      for (let i = 1; i < playerPages + 1; i++) {
        const {data} = await axios.get(baseURL + i)
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
      return {
        ...state,
        players: filteredPlayers
      }
    }
    default:
      return state
  }
}

export default players
