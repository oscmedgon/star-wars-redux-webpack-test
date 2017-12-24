import React from 'react'

import './match.css'
const Match = props => {
  return (
    <div>
      <h2>Match rules</h2>
      <h1 className='clasification'>0 : 0</h1>
      <ul className='rules'>
        <li>
          <img src='https://res.cloudinary.com/dm303fk5u/image/upload/t_media_lib_thumb/v1514112836/gold_j4rmoi.png' alt='gold' height='60' />
          <p>{props.rules.gold} Kg</p>
        </li>
        <li>
          <img src='https://res.cloudinary.com/dm303fk5u/image/upload/t_media_lib_thumb/v1514112836/distance_v9zgsm.png' alt='distance' height='60' />
          <p>{props.rules.distance} Km</p>
        </li>
      </ul>
    </div>
  )
}

export default Match
