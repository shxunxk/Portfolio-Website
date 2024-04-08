import { useState } from 'react';
import './Sidebar.scss'; // Import CSS for styling
import Links from './Links/Links';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(null);
  {console.log(isOpen)}
  return (
    <div className={'sidebar'}>
      <div className="toggle-btn" onClick={()=>setIsOpen(!isOpen)}>
        {isOpen && 
        <div className='open'> Close
        </div>}
        {!isOpen && 
        <div>
          <div className='close'>Open</div>
        </div>}
      </div>
      <div className='options'>
      {isOpen && 
        <div className='section-open'>
          {/* <Links/> */}
        </div>}
        {!isOpen && 
          <div className='section-close'>
            {/* <Links/> */}
          </div>
        }
      </div>
    </div>
  );
};

export default Sidebar;
