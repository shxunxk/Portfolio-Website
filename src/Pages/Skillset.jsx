import './Skillset.scss';
import WorkCard from '../Components/WorkCard/WorkCard';
import Navbar from '../Components/Navbar/Navbar';

const projects = [{ name: 'name1', img: 'github.png' }, { name: 'name2', img: 'github.png' }];

export default function LatestWork() {
  return (
    <>
      <div className="skillset">
        <Navbar />
        <section className='skill'>
          <h1 className='header' style={{ textAlign: 'center' }}>Projects</h1>
          <div className='main'>
            {projects.map((item, index) => (
              <div key={index} style={{ paddingBottom: '20px' }}>
                <WorkCard name={item.name} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
