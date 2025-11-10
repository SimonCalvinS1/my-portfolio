import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "SOCIO - Event Registration at CHRIST",
      description: "Built both mobile and web full-stack apps (prototypes) for online event registration at CHRIST Central Campus",
      tech: ["Flutter", "Node.js", "Supabase"],
      link: "#",
    },
    {
      id: 2,
      title: "Explore Shanti Nagar - A Tourist Guide",
      description: "A transport-guide website of Shanti Nagar involving places to visit in and around Shanti Nagar in places like Double Road, Lakkasandra, etc",
      tech: ["MERN Stack", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Aqua Manage - Fish Health (Ongoing)",
      description: "A web application to monitor and manage fish health in aquaculture farms using data analytics.",
      tech: ["Next.js", "TypeScript"],
      link: "#",
    },
    {
      id: 4,
      title: "EatJourney - Calories Regulator (Ongoing)",
      description: "A cross-platform app to help users track and regulate their calorie intake and diet plans.",
      tech: ["React Native", "Node.js"],
      link: "#",
    },
    {
      id: 5,
      title: "International Debt Analysis (Ongoing)",
      description: "A data analysis project to visualise and gather useful information and perform meaning operations on it.",
      tech: ["Python"],
      link: "#",
    }
  ];

    return (
    <section className="py-10 bg-gray-50"> {/* Added margin bottom */}
      <div className="mx-auto px-3">
        <header className="text-3xl text-center text-blue-800 font-semibold mb-4">My Projects</header>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#f0f0f0] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex and flex-grow */}
                <h3 className="text-2xl text-blue-700 font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2 mt-1">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-1 bg-[#154cb3] text-white text-sm mt-2 rounded-full"
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
      <p id='certifications'></p>
    </section>
  );
}

export default Projects;