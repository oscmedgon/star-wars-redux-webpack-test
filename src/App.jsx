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
    return (
      <Game gameLoading={this.props.players.loading} />
    )
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
