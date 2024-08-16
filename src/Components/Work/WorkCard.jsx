import './WorkCard.scss';
import { Link } from 'react-router-dom';

export default function WorkCard({ item }) {

  return (
    <Link to={`/workinfo/${item.name}`} className="imgText">
      <div className="card">
        <div className="image">
          <img src={item.img} alt={item.name} className="img" />
        </div>
        <div className="textBox">
          <p className="name">{item.name}</p>
          {item.role && <p className="role">{item.role}</p>}
        </div>
      </div>
      <div className="text">
        {item.desc}
      </div>
    </Link>
  );
}
