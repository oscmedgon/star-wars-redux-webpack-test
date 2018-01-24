import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as gameActions from '../actions/AppActions';
import Player from './Player';
import Match from './Match';
import './Game.css';

class Game extends Component {
  componentWillMount () {
    this.props.gameActions.generateNewMatch(this.props.players.list);
  }
  render () {
    return (
      <div className='game-section' >
        <Player player='1' playerInfo={this.props.matchInfo.players.player1} matchStatus={this.props.history.player1.lastStatus} matchHistory={this.props.history.player1.lastStats} />
        <Match />
        <Player player='2' playerInfo={this.props.matchInfo.players.player2} matchStatus={this.props.history.player2.lastStatus} matchHistory={this.props.history.player2.lastStats} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    ...state
  };
}
function mapDispatchToProps (dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
