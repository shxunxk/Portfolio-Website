import './WorkCard.scss'

export default function WorkCard({item}) {
  return (
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
        <div className='text'>
            {item.role && <p>Role: {item.role}</p>}
            <br></br>
            <p>Description: {item.desc}</p>
        </div>
    </div>
  )
}
