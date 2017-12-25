import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as gameActions from '../actions'
import Player from './Player'
import Match from './Match'
import './Game.css'

class Game extends Component {
  constructor () {
    super()
  }
  componentWillMount () {
    this.props.gameActions.generateNewMatch(this.props.players.list)
  }
  render () {
    return (
      <div className='game-section' >
        <Player player='1' playerInfo={this.props.matchInfo.players.player1} matchHistory={this.props.history.player1.lastStats} />
        <Match />
        <Player player='2' playerInfo={this.props.matchInfo.players.player2} matchHistory={this.props.history.player2.lastStats} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    ...state
  }
}
function mapDispatchToProps (dispatch) {
  return {
    gameActions: bindActionCreators(gameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
