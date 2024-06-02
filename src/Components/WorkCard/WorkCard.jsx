import './WorkCard.scss'
import { Link } from 'react-router-dom'

export default function WorkCard({item}) {
  return (
    <Link to={`/workinfo/${encodeURIComponent(JSON.stringify(item))}`}>
      <div className='card'>
        <div className='image'>
            <div className='imge'>
              <img src={item.img} className='img'></img>
            </div>
            <br></br>
            <div className='textBox'>
              <p className='name'>{item.name}</p>
            </div>
        </div>
        <div className='text' style={{display:'flex', flexDirection:'column', gap:'2%'}}>
            {item.role && <p>Role: {item.role}<br></br></p>}
            {item.desc && <p>{item.desc}<br></br></p>}
        </div>
    </div>
    </Link>
    
  )
}
