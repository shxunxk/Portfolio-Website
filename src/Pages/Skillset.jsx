import './Skillset.scss';

const projects = [{ name: 'name1', img: 'github.png' }, { name: 'name2', img: 'github.png' }];

export default function LatestWork() {
  return (
    <>
      <div className="skillset">
        <p>Hi</p>
        {/* <section className='skill'>
          <h1 className='header' style={{ textAlign: 'center' }}>Projects</h1>
          <div className='main'>
            {projects.map((item, index) => (
              <div key={index} style={{ paddingBottom: '20px' }}>
                <WorkCard name={item.name} />
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </>
  )
}
