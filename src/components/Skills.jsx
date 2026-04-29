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
      description: "Strong expertise in SQL for database design, queries, and optimization",
    },
    {
      name: "NoSQL",
      level: "Intermediate",
      description: "Proficient in NoSQL databases (MongoDB) for flexible data storage and retrieval",
    },
    {
      name: "Java",
      level: "Intermediate",
      description: "Object-oriented programming and application development with Java",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
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
              className="bg-blue-500 border border-blue-700/50 rounded-lg p-6 hover:bg-blue-600 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Skill Name and Level */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white">
                  {skill.name}
                </h3>
                <span className="px-3 py-1 bg-blue-800/60 text-blue-300 text-xs text-white font-semibold rounded border border-blue-600/50">
                  {skill.level}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-white mb-4" />

              {/* Description */}
              <p className="text-white leading-relaxed text-sm">
                {skill.description}
              </p>

              {/* Visual proficiency indicator */}
              <div className="mt-4 h-2 bg-blue-900/40 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-500"
                  style={{
                    width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "80%" : "70%"
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="bg-blue-500 hover:bg-blue-600 border border-blue-700/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Additional Technologies & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-white mb-3">
                <span className="font-semibold text-white">Frontend:</span> React, Tailwind CSS, Vite
              </p>
            </div>
            <div>
              <p className="text-white mb-3">
                <span className="font-semibold text-white">Database:</span> PostgreSQL, MongoDB, MySQL
              </p>
            </div>
            <div>
              <p className="text-white mb-3">
                <span className="font-semibold text-white">Tools & Platforms:</span> Git Version Control, Figma, VS Code
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
