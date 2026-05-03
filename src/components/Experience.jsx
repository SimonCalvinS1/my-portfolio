import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "App Developer Intern - SOCIO - CHRIST Incubation Centre",
      description:
        "Built a prototype app for online event registration at Christ Central Campus using Flutter, Node.js and Supabase (PostgreSQL). Deployed backend server at Render and maintained documentation.",
    },
    {
      id: 2,
      title: "Co-Founder, Full Stack Engineer at MentorVerse (previously CampusHero)",
      description:
        "Co-founded a student-led initiative platform at Department of Computer Science, CHRIST (Deemed to be University), aimed at enhancing campus life through management of student issues and reporting them through online based Mentor-Mentee sessions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My hands-on roles and contributions in development and software management.
          </p>
        </header>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {exp.title}
              </h3>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
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
