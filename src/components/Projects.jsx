import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "SOCIO",
      description: "Built mobile and web full-stack apps for event registration at CHRIST",
      tech: ["Next.js", "Node.js", "Flutter", "Supabase"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Explore Shanti Nagar",
      description: "A transport-guide of Shanti Nagar involving places to visit in and around",
      tech: ["MERN Stack", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Aqua Manage",
      description: "Description of project three. Explain the key features and technologies used.",
      tech: ["Next.js", "TypeScript"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Eat Journey",
      description: "A brief description of project four. Explain the key features and technologies used.",
      tech: ["React Native", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Data Analysis",
      description: "A brief description of project five. Explain the key features and technologies used.",
      tech: ["Python"],
      github: "#",
      live: "#"
    }
  ];

    return (
    <section id="projects" className="py-10 mb-20"> {/* Added margin bottom */}
      <div className="max-w-6xl mx-auto px-3">
        <header className="text-2xl text-center text-blue-900 font-extrabold">My Projects</header>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#f0f0ff] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex and flex-grow */}
                <h3 className="text-2xl text-blue-700 font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4 mt-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#154cb3] text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p> {/* Added flex-grow */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;