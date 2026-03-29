import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Indian Places to Visit - Data Analysis (Ongoing)",
      description: "Suggestion of best food, stay and travel options in India based on user reviews and ratings on Google. Dataset was collected using Kaggle and analyzed using Python and its libraries.",
      tech: ["Python", "Excel", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      id: 2,
      title: "CampusHero - Online Mentor-Mentee (Ongoing)",
      description: "Co-founded a student-led initiative platform at Department of Computer Science, Christ (Deemed to be University), aimed at enhancing campus life through management of student issues and reporting them through online based Mentor-Mentee sessions.",
      tech: ["React", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "SOCIO - Event Registration App at CHRIST",
      description: "Built a prototype app for Socio, which is an online event registration at Christ Central Campus. Also commited few contributions towards the web app using Next.js and Tailwind CSS for seamless user experience, maintained documents for this software project by working for a real-world startup-based project.",
      tech: ["Documentation", "Figma", "Flutter", "Node.js", "Supabase"]
    }
  ];

    return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-300 mb-4">My Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Here are my projects and work in progress, showcasing my skills and experience.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-blue-900/50 border border-blue-700/50 rounded-lg hover:bg-blue-900/70 hover:border-blue-600 transition-all duration-300 hover:shadow-lg flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-200 mb-3">{project.title}</h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-800/60 text-blue-200 text-xs font-medium rounded border border-blue-600/50 hover:bg-blue-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Divider */}
                <div className="border-t border-blue-700/30 pt-4 mb-4" />
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm flex-grow">{project.description}</p>
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