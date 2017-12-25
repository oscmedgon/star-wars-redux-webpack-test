import API from '../api'
import {generateRandomMatch, matchResolution} from '../Utils'

// Players Actions
const LOAD_PLAYERS_SUCCESS = 'LOAD_PLAYERS_SUCCESS'
const LOAD_PLAYERS_FAILURE = 'LOAD_PLAYERS_FAILURE'

// Match Actions
const NEW_GAME = 'NEW_GAME'
const RESOLVE_GAME = 'RESOLVE_GAME'

// Players Actions (async)
const LOAD_PLAYERS_INIT = 'LOAD_PLAYERS_INIT'

// Action Creators Players
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

// Action Creators Match

export function generateNewMatch (players) {
  const matchInfo = generateRandomMatch(players)
  return {
    type: NEW_GAME,
    payload: matchInfo
  }
}

// Action creators History
export function resolveMatch (players, rules) {
  const matchInfo = matchResolution(players, rules)
  return {
    type: RESOLVE_GAME,
    payload: matchInfo
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
