import React from 'react';
import { Briefcase, Building2 } from 'lucide-react'; // Lucide icons for a professional touch

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Developer - SOCIO - CHRIST Incubation Centre",
      description:
        "Built both mobile and web full-stack apps (prototypes) for online event registration at CHRIST Central Campus. Developed a mobile app using Flutter. Integrated backend using Node.js and Supabase (PostgreSQL). Deployed backend server at Render. Also commited few contributions towards the web app using Next.js and Tailwind CSS for seamless user experience, maintained documents for this software project by working for a real-world startup-based project.",
    },
    {
      id: 2,
      title: "Hospitality Volunteer - Industry Academia Nexus 2025 - School of Sciences",
      description:
        "Managed hospitality services to the chief guests who had arrived from various companies like Tech Mahindra, IBM Chennai, Tata Power Solar, and more. Managed eateries and refreshments for the guests during the event. Coordinated with hospitality team members to ensure smooth functioning of hospitality services during the event.",
    },
  ];

  return (
    <section className="py-6 mt-4">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-3">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg">
            My hands-on roles and contributions in development and event management
          </p>
        </header>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Accent gradient border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200"></div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 ? (
                    <Briefcase className="text-blue-600 w-7 h-7" />
                  ) : (
                    <Building2 className="text-blue-600 w-7 h-7" />
                  )}
                  <h3 className="text-xl font-semibold text-blue-800 leading-snug">
                    {exp.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed">{exp.description}</p>

                <div className="mt-5 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
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
