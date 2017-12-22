import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as gameActions from './actions'
import reducer from './reducers'

class App extends Component {
  constructor () {
    super()
  }
  async componentWillMount () {
    await this.props.loadPlayers()
  }
  render () {
    return (
      <div>
        <h1>Hola mundo</h1>
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
  return bindActionCreators(gameActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
