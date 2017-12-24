import initialState from './initialState'

const matchInfo = (state = initialState.matchInfo, action) => {
  switch (action.type) {
    case 'LOAD_GAME_SUCCESS':
      return {
        ...state,
        loading: false,
        players: {
          player1: {
            name: action.payload.player1.name,
            vehicle: {
              speed: action.payload.player1.vehicle.speed,
              cargo: action.payload.player1.vehicle.cargo
            }
          },
          player2: {
            name: action.payload.player2.name,
            vehicle: {
              speed: action.payload.player2.vehicle.speed,
              cargo: action.payload.player2.vehicle.cargo
            }
          }
        },
        rules: {
          gold: action.payload.rules.gold,
          distance: action.payload.rules.distance
        }
      }
    case 'LOAD_GAME_INIT':
      return {
        ...state,
        loading: true,
        players: {
          player1: {
            name: 'loading',
            vehicle: {
              speed: 'loading',
              cargo: 'loading'
            }
          },
          player2: {
            name: 'loading',
            vehicle: {
              speed: 'loading',
              cargo: 'loading'
            }
          }
        },
        rules: {
          gold: 'loading',
          distance: 'loading'
        }
      }

    default:
      return state
  }
}

export default matchInfo
