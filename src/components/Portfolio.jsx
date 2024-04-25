import React, { useState } from 'react';
import projectsData from '../portfolios.json';

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(3); // Number of projects to display initially

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
    if (!showAllProjects) {
      setProjectsToShow(projectsData.length); // Show all projects
    } else {
      setProjectsToShow(3); // Show only 3 projects
    }
  };

  return (
    <section id="portfolio" className="mb-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.slice(0, projectsToShow).map((project) => (
          <div key={project.id} className="bg-light p-6 rounded-lg shadow-lg">
            <h3 className="text-xl lg:text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
            <img src={''} alt={project.title} className="mt-4 rounded-lg" />
            <p className="mt-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
            </p>
          </div>
        ))}
      </div>
      {/* Show More / Show Less Button */}
      {projectsData.length > 3 && (
        <div className="mt-6 text-center">
          <button
            className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-secondary transition-colors"
            onClick={toggleProjects}
          >
            {showAllProjects ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
