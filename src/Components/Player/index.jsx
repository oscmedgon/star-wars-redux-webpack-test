import React from 'react'

const Player = props => (
  <div className='player-section'>
    <h2>
      {props.player}
    </h2>
    <h3>
      {props.playerInfo.name}
    </h3>
    <ul>
      <li>Speed: {props.playerInfo.vehicle.speed}</li>
      <li>Cargo: {props.playerInfo.vehicle.cargo}</li>
    </ul>
  </div>
)

export default Player
