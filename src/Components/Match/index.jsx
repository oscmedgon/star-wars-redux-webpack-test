import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as gameActions from '../../actions/AppActions';
import './match.css';

class Match extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick () {
    await this.props.gameActions.generateNewMatch(this.props.players.list);
    this.handleResolve();
  }
  handleResolve () {
    const {players, rules} = this.props.matchInfo;
    this.props.gameActions.resolveMatch(players, rules);
  }
  componentWillMount () {
    this.handleResolve();
  }

  render () {
    return (
      <div>
        <h2>Match rules</h2>
        <h1 className='clasification'>{this.props.history.player1.points} : {this.props.history.player2.points}</h1>
        <ul className='rules'>
          <li>
            <img src='https://res.cloudinary.com/dm303fk5u/image/upload/t_media_lib_thumb/v1514112836/gold_j4rmoi.png' alt='gold' height='60' />
            <p>{this.props.matchInfo.rules.gold} Kg</p>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dm303fk5u/image/upload/t_media_lib_thumb/v1514112836/distance_v9zgsm.png' alt='distance' height='60' />
            <p>{this.props.matchInfo.rules.distance} Km</p>
          </li>
        </ul>
        <button className='btn btn-start' type='button' onClick={this.handleClick}>Next Round</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Match);
