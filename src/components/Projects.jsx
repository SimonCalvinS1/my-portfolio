import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "International Debt - Statistics Analysis (Ongoing)",
      description: "A data analysis project to visualise and gather useful information and perform meaning operations on it.",
      tech: ["Python", "MySQL", "Excel"],
      link: "#",
    },
    {
      id: 2,
      title: "Indian Places to Visit - Data Analysis (Ongoing)",
      description: "Suggestion of best food, stay and travel options in and around Shanti Nagar based on user reviews and ratings on Google.",
      tech: ["Python", "Excel", "Pandas", "Matplotlib"],
      link: "#",
    },
    {
      id: 3,
      title: "CampusHero - Online Mentor-Mentee (Ongoing)",
      description: "Co-founded a student-led initiative platform aimed at enhancing campus life through management of student issues and reporting them through online based Mentor-Mentee sessions.",
      tech: ["React", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 4,
      title: "SOCIO - Event Registration App at CHRIST",
      description: "Built a mobile full-stack app (prototype) for online event registration at CHRIST Central Campus",
      tech: ["Flutter", "Node.js", "Supabase"],
      link: "#",
    },
    {
      id: 5,
      title: "Explore Shanti Nagar - A Tourist Guide",
      description: "A transport-guide website of Shanti Nagar involving places to visit in and around Shanti Nagar in places like Double Road, Lakkasandra, etc",
      tech: ["MERN Stack", "Tailwind CSS", "Vercel"],
      link: "#",
    },
  ];

    return (
    <section className="py-6 mt-2">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-3xl text-center text-blue-400 font-semibold mb-4">My Projects</header>
        <p className="text-lg text-gray-300 text-center">Here are my projects and work progresses.</p>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl text-blue-500 font-bold">{project.title}</h3>
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
                <p className="text-gray-300 mb-2 flex-grow">{project.description}</p>
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