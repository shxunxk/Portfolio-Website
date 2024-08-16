import WorkCard from './WorkCard';
import './Section.scss';

export default function Section({ title, completedProjects = [], pendingProjects = [], projects = [] }) {
  return (
    <div className="section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="section-content">
        {completedProjects.length > 0 && <h4>Completed Projects</h4>}
        {completedProjects.map((item, index) => (
          <div key={index} className='card'>
              <WorkCard item={item} />          
          </div>
        ))}

        {pendingProjects.length > 0 && <h4>Pending Projects</h4>}
        {pendingProjects.map((item, index) => (
          <div key={index} className='card'>
            <WorkCard item={item} />          
          </div>
        ))}

        {projects.length > 0 &&
          projects.map((item, index) => (
            <div key={index} className='card'>
              <WorkCard item={item} />          
            </div>
          ))}
      </div>
    </div>
  );
}
