import './WorkCard.scss'
import { Link } from 'react-router-dom'

export default function WorkCard({item}) {
  return (
    // <Link to={`/workinfo/${encodeURIComponent(JSON.stringify(item))}`}>
      <div className='card' style={{backgroundColor:"yellowgreen"}}>
        <div className='image'>
              <img src={item.img} className='img'></img>
        </div>
        <div className='textBox'>
              <p className='name'>{item.name}</p>
            </div>
    </div>
    // </Link>
    
  )
}
