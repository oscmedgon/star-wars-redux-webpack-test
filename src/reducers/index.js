import { combineReducers } from 'redux'
import players from './players'
import matchInfo from './matchInfo'

const starWarsRace = combineReducers({
  players,
  matchInfo
})

export default starWarsRace
