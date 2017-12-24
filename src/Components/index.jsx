import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as gameActions from '../actions'
import Player from './Player'
import './Game.css'

class Game extends Component {
  constructor () {
    super()
  }
  render () {
    console.log(this.props)
    if (this.props.gameLoading) {
      return (
        <div className='game-section'>
          <div>
            <h1>Espera mientras carga la información principal</h1>
          </div>
          <img src='https://thumbs.gfycat.com/AmazingDazzlingFrog-max-1mb.gif' height='100' />
        </div>
      )
    } else {
      return (
        <div className='game-section' >
          <Player player='Player 1' playerInfo={this.props.matchInfo.players.player1} />
          <Player player='Player 2' playerInfo={this.props.matchInfo.players.player2} />
        </div>
      )
    }
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
