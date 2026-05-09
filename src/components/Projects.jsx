import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Indian Places to Visit - Data Analysis",
      description: "Suggestion of best food, stay and travel options in India based on user reviews and ratings on Google. Dataset was collected using Kaggle and analyzed using Python and its libraries.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      id: 2,
      title: "Retail Analysis - Data Analysis (Ongoing)",
      description: "Analyzed retail sales data to identify trends and patterns in Indian retail businesses.",
      tech: ["Python", "Pandas"]
    },
    {
      id: 3,
      title: "MentorVerse (previously CampusHero) - Online Mentor-Mentee (Ongoing)",
      description: "Co-founded a student-led initiative platform at Department of Computer Science, Christ (Deemed to be University), aimed at enhancing campus life through management of student issues and reporting them through online based Mentor-Mentee sessions.",
      tech: ["React", "Tailwind CSS"]
    },
    {
      id: 4,
      title: "SOCIO - Event Registration App at CHRIST",
      description: "Built a prototype app for Socio, which is an online event registration at Christ Central Campus. Also commited few contributions towards the web app using Next.js and Tailwind CSS for seamless user experience, maintained documents for this software project by working for a real-world startup-based project.",
      tech: ["Documentation", "Figma", "Flutter", "Supabase"]
    }
  ];

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
                      className="px-3 py-1 bg-[#154CB3] text-white text-xs font-medium rounded border border-[#154CB3] hover:bg-[#0f3a8a] transition-colors"
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