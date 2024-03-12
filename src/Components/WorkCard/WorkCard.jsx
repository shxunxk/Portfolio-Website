import React from 'react'
import './WorkCard.scss'

export default function WorkCard({item}) {
  return (
    <div className='card'>
      {console.log(item)}
        <div className='image'>
            <img src={item.img} className='img'></img>
            <p className='name'>{item.name}</p>
        </div>
        <div className='text'>
            <p>{item.desc}</p>
        </div>
    </div>
  )
}
