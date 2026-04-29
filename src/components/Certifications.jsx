import React from "react";

const Certifications = () => {
  const certificationsData = [
    {
      title : "Applied Database Systems 23ai",
      institution: "Oracle Academy",
    },
    {
      title: "CBIT Hackathon 2025",
      institution: "Chaitanya Bharathi Institute of Technology, Hyderabad",
    },
    {
      title: "GameCraft",
      institution: "CHRIST (Deemed to be University)",
    },
    {
      title: "Python Certification",
      institution: "freeCodeCamp",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
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
              className="bg-blue-500 border border-blue-700/50 rounded-lg p-6 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {cer.title}
              </h3>
              <div className="border-t border-white pt-4">
                <p className="text-white text-sm">
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