import API from '../api';
import {generateRandomMatch, matchResolution} from '../Utils';
import * as actionTypes from './actionTypes';

// Action Creators Players
export function fetchPlayersSuccess (players) {
  return {
    type: actionTypes.LOAD_PLAYERS_SUCCESS,
    payload: players
  };
}
export function fetchPlayersFailure (error) {
  return {
    type: actionTypes.LOAD_PLAYERS_FAILURE,
    payload: error
  };
}

// Action Creators Match

export function generateNewMatch (players) {
  const matchInfo = generateRandomMatch(players);
  return {
    type: actionTypes.NEW_GAME,
    payload: matchInfo
  };
}

// Action creators History
export function resolveMatch (players, rules) {
  const matchInfo = matchResolution(players, rules);
  return {
    type: actionTypes.RESOLVE_GAME,
    payload: matchInfo
  };
}

// Action creators (Async)
export function loadPlayers () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: actionTypes.LOAD_PLAYERS_INIT
      };
    });
    try {
      const data = await API.players.getPlayers();
      return dispatch(fetchPlayersSuccess(data));
    } catch (error) {
      return dispatch(fetchPlayersFailure(error));
    }
  };
}
