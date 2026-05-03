import React from 'react';

function Skills() {
  const skillsData = [
    {
      name: "Python",
      level: "Expert",
      description: "Advanced proficiency in Python for data analysis, web development, and scripting",
    },
    {
      name: "SQL",
      level: "Advanced",
      description: "Strong expertise in SQL based databases (PostgreSQL, MySQL) for database design, queries, and optimization",
    },
    {
      name: "NoSQL",
      level: "Intermediate",
      description: "Proficient in NoSQL database (MongoDB) for flexible data storage and retrieval",
    },
    {
      name: "Tableau",
      level: "Intermediate",
      description: "Creating interactive data visualizations and dashboards with Tableau",
    },
    {
      name: "Blogging",
      level: "Intermediate",
      description: "Proficient in creating engaging content and managing blog platforms",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My primary programming languages and technical expertise that I use to build robust solutions.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Skill Name and Level */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-black">
                  {skill.name}
                </h3>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded border border-teal-300">
                  {skill.level}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-4" />

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {skill.description}
              </p>

              {/* Visual proficiency indicator */}
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-500 group-hover:from-teal-600 group-hover:to-teal-500"
                  style={{
                    width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "80%" : "70%"
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            Additional Technologies & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold text-black">Frontend:</span> React, Tailwind CSS, Vite
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold text-black">Database:</span> PostgreSQL, MySQL, MongoDB, Supabase
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-3">
                <span className="font-semibold text-black">Tools & Platforms:</span> Git, GitHub, Figma, VS Code, Jupyter Notebook, Tableau
              </p>
            </div>
          </div>
        </div>
      </div>
      <p id="experience"></p>
    </section>
  );
}

export default Skills;
