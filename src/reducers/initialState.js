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
  }

}

export default initialState
