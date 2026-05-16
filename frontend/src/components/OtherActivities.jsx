import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api.js';

function OtherActivities() {
  const [activites, setActivites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      const data = await apiService.getActivities();
      if (data && data.length > 0) {
        setActivites(data);
      }
      setLoading(false);
    };
    
    fetchActivities();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            Other Activities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Highlights of my accomplishments and contributions.
          </p>
        </header>

        {/* Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activites.map((ac) => (
            <div
              key={ac.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {ac.title}
              </h3>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600 leading-relaxed">{ac.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherActivities;
