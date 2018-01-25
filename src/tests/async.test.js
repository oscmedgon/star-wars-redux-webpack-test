import configureStore from '../store';
import initialState from '../reducers/initialState';

import API from '../api';

import * as actions from '../actions/AppActions';
import * as types from '../actions/actionTypes';

const rawPlayers = require('./fakePlayers.json');
const {list} = JSON.parse(JSON.stringify(rawPlayers));

const store = configureStore(initialState);
jest.setTimeout(40000);
let data = '';
describe('store', () => {
  it('Should return error or success', async () => {
    // console.log(store.getState())
    // console.log(actions)
    const load = async () => {
      try {
        const data = await API.players.getPlayers();
        console.log(data)
        return actions.fetchPlayersSuccess(data);
      } catch (error) {
        return actions.fetchPlayersFailure(error);
      }
    };
    data = await load();
    expect(data.type === 'LOAD_PLAYERS_SUCCESS' || 'LOAD_PLAYERS_FAILURE').toBeTruthy();
  });
    it('should have a payload or error description', async () => {
      expect(data.payload || data.error).toBeTruthy();
      console.log(data.payload || data.error)
    });
    it('payload should be an array not empty', async () => {
      expect((data.payload.length && Array.isArray(data.payload)) || data.error).toBeTruthy();
    });
});
