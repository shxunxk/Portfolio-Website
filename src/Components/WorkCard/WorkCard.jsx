import './WorkCard.scss'
import { Link } from 'react-router-dom'

export default function WorkCard({item}) {
  return (
    <Link to={`/workinfo/${item.name}`}>
      <div className='card' style={{}}>
        <div className='image'>
              <img src={item.img} className='img'></img>
        </div>
        <div className='textBox'>
              <p className='name'>{item.name}</p>
            </div>
    </div>
    </Link>
    
  )
}
