import { combineReducers } from 'redux';
import players from './players';
import matchInfo from './matchInfo';
import history from './history';

const starWarsRace = combineReducers({
  players,
  matchInfo,
  history
});

export default starWarsRace;
