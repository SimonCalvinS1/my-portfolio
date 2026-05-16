import React, { useState, useEffect } from "react";
import { apiService } from '../services/api.js';

const Education = () => {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEducation = async () => {
      setLoading(true);
      const data = await apiService.getEducation();
      if (data && data.length > 0) {
        setEducationData(data);
      }
      setLoading(false);
    };
    
    fetchEducation();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            Education
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A summary of my academic background and qualifications.
          </p>
        </header>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
            >
              <h2 className="text-xl font-semibold text-black mb-2">
                {edu.title}
              </h2>
              <p className="text-gray-500 text-sm mb-3">{edu.duration}</p>
              <div className="border-t border-gray-200 pt-4 mb-4">
                <h3 className="text-gray-700 font-medium text-sm mb-2">
                  {edu.institution}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p id="projects"></p>
    </section>
  );
};

export default Education;
