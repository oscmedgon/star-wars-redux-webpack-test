const generateRandomMatch = players => {
  const randomPlayers1 = Math.floor(Math.random() * players.length);
  const randomPlayers2 = Math.floor(Math.random() * players.length);
  const newPlayers = {
    player1: {
      name: players[randomPlayers1].name,
      vehicle: players[randomPlayers1].vehicles[Math.floor(Math.random() * players[randomPlayers1].vehicles.length)]
    },
    player2: {
      name: players[randomPlayers2].name,
      vehicle: players[randomPlayers2].vehicles[Math.floor(Math.random() * players[randomPlayers2].vehicles.length)]
    }
  };
  const rules = {
    gold: Math.floor(Math.random() * 99000 + 1000),
    distance: Math.floor(Math.random() * 9900 + 100)
  };
  const response = rulesPrettify(newPlayers, rules);
  return response;
};

const rulesPrettify = (players, rules) => {
  const {player1, player2} = players;
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
  };
  return response;
};

const matchResolution = (players, rules) => {
  const {player1, player2} = players;
  const {gold, distance} = rules;
  const statsP1 = checkPlayerStats(player1, gold, distance);
  const statsP2 = checkPlayerStats(player2, gold, distance);
  const result = checkWinner(statsP1.totalTime, statsP2.totalTime);
  const response = {
    player1: {
      lastStatus: result !== 2 || false,
      lastStats: {
        totalTime: statsP1.totalTime,
        timePerTravel: statsP1.timePerTravel,
        travels: statsP1.travels
      }
    },
    player2: {
      lastStatus: result !== 1 || false,
      lastStats: {
        totalTime: statsP2.totalTime,
        timePerTravel: statsP2.timePerTravel,
        travels: statsP2.travels
      }
    }
  };
  return response;
};

const checkPlayerStats = (player, gold, distance) => {
  const {speed, cargo} = player.vehicle;
  // Checking number of travels
  const travels = Math.ceil(((gold / cargo) * 2) - 1);
  // Checking tital time to complete a single travel
  const timePerTravel = distance / speed;
  // Checking total time including loads and unloads
  const totalTime = (travels * timePerTravel) + travels;
  return {totalTime, timePerTravel, travels};
};

const checkWinner = (p1, p2) => {
  if (p1 > p2) return 2;
  else if (p1 < p2) return 1;
  else if (p1 === p2) return 'draw';
};
export {generateRandomMatch, matchResolution};
