import React from 'react'

import './player.css'

const Player = props => {
  const playerStatus = props.matchStatus ? 'player-winner' : 'player-loser'
  return (
    <div className={'player-section ' + playerStatus}>
      <h2>
        Player {props.player}
      </h2>
      <h3>
        {props.playerInfo.name}
      </h3>
      <ul>
        <li>Name: <strong>{props.playerInfo.vehicle.name}</strong></li>
        <li>Speed: <strong>{props.playerInfo.vehicle.speed}</strong> km/h</li>
        <li>Cargo: <strong>{props.playerInfo.vehicle.cargo}</strong> kg</li>
      </ul>
      <h2>Match Stats</h2>
      <ul>
        <li>Total travels: <strong>{props.matchHistory.travelNumber}</strong></li>
        <li>Time to complete a travel: <strong>{Math.ceil(props.matchHistory.timePerTravel)}</strong> Hours</li>
        <li>Total time to complete: <strong>{Math.ceil(props.matchHistory.totalTime)}</strong> Hours</li>
      </ul>
    </div>
  )
}

export default Player
