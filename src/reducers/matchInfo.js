import initialState from './initialState';

const matchInfo = (state = initialState.matchInfo, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        ...state,
        loading: false,
        players: {
          player1: {
            name: action.payload.players.player1.name,
            vehicle: {
              name: action.payload.players.player1.vehicle.name,
              speed: action.payload.players.player1.vehicle.speed,
              cargo: action.payload.players.player1.vehicle.cargo
            }
          },
          player2: {
            name: action.payload.players.player2.name,
            vehicle: {
              name: action.payload.players.player2.vehicle.name,
              speed: action.payload.players.player2.vehicle.speed,
              cargo: action.payload.players.player2.vehicle.cargo
            }
          }
        },
        rules: {
          gold: action.payload.rules.gold,
          distance: action.payload.rules.distance
        }
      };
    case 'LOAD_GAME_INIT':
      return {
        ...state,
        loading: true,
        players: {
          player1: {
            name: 'loading',
            vehicle: {
              name: 'loading...',
              speed: 'loading',
              cargo: 'loading'
            }
          },
          player2: {
            name: 'loading',
            vehicle: {
              name: 'loading...',
              speed: 'loading',
              cargo: 'loading'
            }
          }
        },
        rules: {
          gold: 'loading',
          distance: 'loading'
        }
      };

    default:
      return state;
  }
};

export default matchInfo;
