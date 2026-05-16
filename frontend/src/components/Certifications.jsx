import React, { useState, useEffect } from "react";
import { apiService } from '../services/api.js';

const Certifications = () => {
  const [certificationsData, setCertificationsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCertifications = async () => {
      setLoading(true);
      const data = await apiService.getCertifications();
      if (data && data.length > 0) {
        setCertificationsData(data);
      }
      setLoading(false);
    };
    
    fetchCertifications();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-center text-black mb-4">
          My Certifications
        </h2>
        <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
          Professional certifications and courses that demonstrate my expertise and commitment to continuous learning
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cer, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-black mb-3">
                {cer.title}
              </h3>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600 text-sm">
                  {cer.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p id="other-activities"></p>
    </section>
  );
};

export default Certifications;