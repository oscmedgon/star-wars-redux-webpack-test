const generateRandomMatch = players => {
  const randomPlayers1 = Math.floor(Math.random() * players.length)
  const randomPlayers2 = Math.floor(Math.random() * players.length)
  const newPlayers = {
    player1: {
      name: players[randomPlayers1].name,
      vehicle: players[randomPlayers1].vehicles[Math.floor(Math.random() * players[randomPlayers1].vehicles.length)]
    },
    player2: {
      name: players[randomPlayers2].name,
      vehicle: players[randomPlayers2].vehicles[Math.floor(Math.random() * players[randomPlayers2].vehicles.length)]
    }
  }
  const rules = {
    gold: Math.floor(Math.random() * 9900 + 100),
    distance: Math.floor(Math.random() * 99000 + 1000)
  }
  const response = rulesPrettify(newPlayers, rules)
  return response
}

const rulesPrettify = (players, rules) => {
  const {player1, player2} = players
  const response = {
    players: {
      player1: {
        name: player1.name,
        vehicle: {
          name: player1.vehicle.name,
          cargo: player1.vehicle.cargo_capacity === 'unknown' ? 1 : parseInt(player1.vehicle.cargo_capacity, 10),
          speed: parseInt(player1.vehicle.max_atmosphering_speed, 10)
        }
      },
      player2: {
        name: player2.name,
        vehicle: {
          name: player2.vehicle.name,
          cargo: player2.vehicle.cargo_capacity === 'unknown' ? 1 : parseInt(player2.vehicle.cargo_capacity, 10),
          speed: parseInt(player2.vehicle.max_atmosphering_speed, 10)
        }
      }
    },
    rules: rules
  }
  return response
}
export {generateRandomMatch}
