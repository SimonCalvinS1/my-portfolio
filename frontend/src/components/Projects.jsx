import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api.js';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const data = await apiService.getProjects();
      if (data && data.length > 0) {
        setProjects(data);
      }
      setLoading(false);
    };
    
    fetchProjects();
  }, []);

    return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">My Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Here are my projects and work in progress, showcasing my skills and experience.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-black mb-3">{project.title}</h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded border border-teal-300 hover:bg-teal-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-200 pt-4 mb-2" />
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p id="certifications"></p>
    </section>
  );
}

export default Projects;