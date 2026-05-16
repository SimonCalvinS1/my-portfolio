import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api.js';

function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const data = await apiService.getSkills();
      if (data && data.length > 0) {
        setSkillsData(data);
      }
      setLoading(false);
    };
    
    fetchSkills();
  }, []);

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
                <span className="px-3 py-1 bg-[#154CB3] text-white text-xs font-semibold rounded border border-[#154CB3] hover:bg-[#0f3a8a] transition-colors">
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
                  className="h-full bg-gradient-to-r from-[#154CB3] to-[#0f3a8a] rounded-full transition-all duration-500 group-hover:from-[#0f3a8a] group-hover:to-[#0a2a66]"
                  style={{
                    width: skill.level === "Expert" ? "90%" : skill.level === "Advanced" ? "80%" : skill.level === "Intermediate" ? "70%" : "45%"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p id="experience"></p>
    </section>
  );
}

export default Skills;
