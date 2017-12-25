import React from 'react'

const Player = props => {
  return (
    <div className='player-section'>
      <h2>
        Player {props.player}
      </h2>
      <h3>
        {props.playerInfo.name}
      </h3>
      <ul>
        <li>Name: {props.playerInfo.vehicle.name}</li>
        <li>Speed: {props.playerInfo.vehicle.speed}</li>
        <li>Cargo: {props.playerInfo.vehicle.cargo}</li>
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
