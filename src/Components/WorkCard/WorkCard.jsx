import React from 'react'
import './WorkCard.scss'

export default function WorkCard({name}) {
  return (
    <div className='card'>
      {console.log(name)}
        <div className='image'>
            <img src="./src/img/5956592.png" className='img'></img>
            <p className='name'>{name}</p>
        </div>
        <div className='text'>
            <p>Hi</p>
        </div>
    </div>
  )
}
