import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as gameActions from './actions'
import Game from './Components'
import './styles.css'

class App extends Component {
  constructor () {
    super()
  }
  async componentWillMount () {
    await this.props.gameActions.loadPlayers()
  }
  render () {
    if (this.props.players.loading) {
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
        <Game />
      )
    }
  }
}
App.propTypes = {
  gameActions: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
