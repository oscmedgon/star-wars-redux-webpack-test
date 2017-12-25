import initialState from './initialState'

const history = (state = initialState.history, action) => {
  switch (action.type) {
    case 'RESOLVE_GAME': {
      const counter = {
        p1: action.payload.player1.lastStatus ? state.player1.points + 1 : state.player1.points,
        p2: action.payload.player2.lastStatus ? state.player2.points + 1 : state.player2.points
      }
      return {
        ...state,
        player1: {
          points: counter.p1,
          lastStatus: action.payload.player1.lastStatus,
          lastStats: {
            totalTime: action.payload.player1.lastStats.totalTime,
            timePerTravel: action.payload.player1.lastStats.timePerTravel,
            travelNumber: action.payload.player1.lastStats.travels
          }
        },
        player2: {
          points: counter.p2,
          lastStatus: action.payload.player2.lastStatus,
          lastStats: {
            totalTime: action.payload.player2.lastStats.totalTime,
            timePerTravel: action.payload.player2.lastStats.timePerTravel,
            travelNumber: action.payload.player2.lastStats.travels
          }
        }
      }
    }
    default:
      return state
  }
}

export default history
