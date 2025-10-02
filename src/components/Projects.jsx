import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of project one. Explain the key features and technologies used.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of project two. Explain the key features and technologies used.",
      tech: ["React", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description of project three. Explain the key features and technologies used.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Project Four",
      description: "A brief description of project four. Explain the key features and technologies used.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Project Five",
      description: "A brief description of project five. Explain the key features and technologies used.",
      tech: ["React", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Project Six",
      description: "A brief description of project six. Explain the key features and technologies used.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "#",
      live: "#"
    }
  ];

    return (
    <section id="projects" className="py-20 mb-20"> {/* Added margin bottom */}
      <div className="max-w-6xl mx-auto px-3">
        <header className="text-2xl text-center text-blue-900 font-extrabold">My Projects</header>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex and flex-grow */}
                <h3>{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p> {/* Added flex-grow */}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#154cb3] text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-10 mt-auto"> {/* Added mt-auto */}
                  <a 
                    href={project.github}
                    className="flex-1 text-center py-2 bg-gray-600 text-white rounded hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 text-center py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;