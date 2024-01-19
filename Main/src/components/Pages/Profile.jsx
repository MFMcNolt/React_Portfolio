import Projects from '../Projects';

const Portfolio = () => {
  const projectsData = [
    {
      title: 'Globetrotters Gallery',
      imageUrl: './Globe.png',
      githubUrl: 'https://github.com/ajayshans/globetrotters-gallery',
    },
    {
        title: 'Park With Access',
        imageUrl: '/Parking.png', 
        githubUrl: 'https://github.com/honguyen00/map-parking',
    },
    {
        title: 'Work Day Calendar',
        imageUrl: '/Workday.png',
        githubUrl: 'https://github.com/MFMcNolt/work-day-scheduler',
        techStack: 'React, Express, Node.js',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-3">
          <Projects
                     title={project.title}
                     imageUrl={project.imageUrl}
                     githubUrl={project.githubUrl}
                   />
          </div>
          ))}
          </div>
          </div>
          );
          };
          
          export default Portfolio;