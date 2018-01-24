import * as actions from '../actions/AppActions';
import * as types from '../actions/actionTypes';
const rawPlayers = require('./fakePlayers.json');
const {list} = JSON.parse(JSON.stringify(rawPlayers));

describe('actions', () => {
  it('Should be an object', () => {
    const actionResult = actions.generateNewMatch(list);
    expect(typeof (actionResult)).toBe('object');
  });
  it(`Returned object must have a players property`, () => {
    const actionResult = actions.generateNewMatch(list);
    expect(actionResult.payload).toHaveProperty('players');
  });
  describe('Testing players', () => {
    it(`Player 1 sould exist and must be an object`, () => {
      const actionResult = actions.generateNewMatch(list);
      expect(typeof (actionResult.payload.players.player1) === 'object').toBeTruthy();
    });
    it(`Player 2 sould have one vehicle and it must be an object`, () => {
      const actionResult = actions.generateNewMatch(list);
      expect(typeof (actionResult.payload.players.player2.vehicle === 'object')).toBeTruthy();
    });
  });
  it(`Returned object must have a property called rules and not empty`, () => {
    const actionResult = actions.generateNewMatch(list);
    expect(actionResult.payload.rules.length !== 0 && typeof (actionResult.payload.rules === 'object')).toBeTruthy();
  });
  describe('Testing rules', () => {
    it(`Should be a property called distance and his value must be higher than 100 but smaler than 9999`, () => {
      const actionResult = actions.generateNewMatch(list);
      const distance = actionResult.payload.rules.distance;
      console.log(`Distance is: ${distance}`)
      expect(distance > 99 && distance < 10000).toBeTruthy();
    });
    it(`Should be a property called gold and his value must be higher than 1000 smaler than 99999`, () => {
      const actionResult = actions.generateNewMatch(list);
      const gold = actionResult.payload.rules.gold;
      console.log(`Gold is: ${gold}`)
      expect(gold > 999 && gold < 100000).toBeTruthy();
    });
  });
});
