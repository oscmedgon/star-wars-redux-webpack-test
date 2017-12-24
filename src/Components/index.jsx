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
        <Player player='Player 1' playerInfo={this.props.matchInfo.players.player1} />
        <Match rules={this.props.matchInfo.rules} />
        <Player player='Player 2' playerInfo={this.props.matchInfo.players.player2} />
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
