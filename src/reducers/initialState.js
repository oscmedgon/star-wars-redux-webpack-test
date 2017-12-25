const initialState = {
  players: {
    list: [],
    error: null,
    loading: true
  },
  matchInfo: {
    loading: true,
    players: {
      player1: {
        name: 'loading...',
        vehicle: {
          speed: 'loading...',
          cargo: 'loading...'
        }
      },
      player2: {
        name: 'loading...',
        vehicle: {
          speed: 'loading...',
          cargo: 'loading...'
        }
      }
    },
    rules: {
      gold: 'loading...',
      distance: 'loading...'
    }
  },
  history: {
    player1: {
      points: 0,
      lastStatus: false,
      lastStats: {
        totalTime: null,
        timePerTravel: null,
        travelNumber: null
      }
    },
    player2: {
      points: 0,
      lastStatus: false,
      lastStats: {
        totalTime: null,
        timePerTravel: null,
        travelNumber: null
      }
    }
  }
}

export default initialState
