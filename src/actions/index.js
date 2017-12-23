import API from '../api'

// Cart Actions
const LOAD_PLAYERS_SUCCESS = 'LOAD_PLAYERS_SUCCESS'
const LOAD_PLAYERS_FAILURE = 'LOAD_PLAYERS_FAILURE'

// Products Actions (async)
const LOAD_PLAYERS_INIT = 'LOAD_PLAYERS_INIT'

// Action Creators
export function fetchPlayersSuccess (players) {
  return {
    type: LOAD_PLAYERS_SUCCESS,
    payload: players
  }
}
export function fetchPlayersFailure (error) {
  return {
    type: LOAD_PLAYERS_FAILURE,
    payload: error
  }
}

// Action creators (Async)
export function loadPlayers () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: LOAD_PLAYERS_INIT
      }
    })
    try {
      const data = await API.players.getPlayers()
      return dispatch(fetchPlayersSuccess(data))
    } catch (error) {
      return dispatch(fetchPlayersFailure(error))
    }
  }
}
