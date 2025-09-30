import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of project one. Explain the key features and technologies used.",
      image: "/path-to-project1-image.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of project two. Explain the key features and technologies used.",
      image: "/path-to-project2-image.jpg",
      tech: ["React", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of project three. Explain the key features and technologies used.",
      image: "/path-to-project3-image.jpg",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Project Four",
      description: "A brief description of project four. Explain the key features and technologies used.",
      image: "/path-to-project4-image.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Project Five",
      description: "A brief description of project five. Explain the key features and technologies used.",
      image: "/path-to-project5-image.jpg",
      tech: ["React", "Firebase", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Project Six",
      description: "A brief description of project six. Explain the key features and technologies used.",
      image: "/path-to-project6-image.jpg",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "#",
      live: "#"
    }
  ];

    return (
    <section id="projects" className="py-20 mb-20"> {/* Added margin bottom */}
      <div className="max-w-6xl mx-auto px-3">
        <header className="text-2xl text-center text-blue-700 font-extrabold">My Projects</header>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex and flex-grow */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p> {/* Added flex-grow */}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto"> {/* Added mt-auto */}
                  <a 
                    href={project.github}
                    className="flex-1 text-center py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
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