import React, {Component, PropTypes} from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hola mundo</h1>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
