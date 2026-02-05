import React from 'react';
import { Briefcase, Building2 } from 'lucide-react'; // Lucide icons for a professional touch

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Developer - SOCIO - CHRIST Incubation Centre",
      description:
        "Built a mobile full-stack app (prototype) for online event registration at CHRIST Central Campus using Flutter. Integrated backend using Node.js and Supabase (PostgreSQL). Deployed backend server at Render. Also commited few contributions towards the web app using Next.js and Tailwind CSS for seamless user experience, maintained documents for this software project by working for a real-world startup-based project.",
    },
    {
      id: 2,
      title: "Co-Founder at CampusHero",
      description:
        "Co-founded CampusHero, a student-led initiative aimed at enhancing campus life through management of student issues and reporting them through online based Mentor-Mentee sessions.",
    },
  ];

  return (
    <section className="py-6 mt-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-3">
            Professional Experience
          </h2>
          <p className="text-white text-lg">
            My hands-on roles and contributions in development and software management.
          </p>
        </header>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-blue-900/60 rounded-2xl shadow-md"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 ? (
                    <Briefcase className="text-yellow-400 w-7 h-7" />
                  ) : (
                    <Building2 className="text-yellow-400 w-7 h-7" />
                  )}
                  <h3 className="text-xl font-semibold text-yellow-300">
                    {exp.title}
                  </h3>
                </div>

                <p className="text-white leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p id="education"></p>
    </section>
  );
}

export default Experience;
