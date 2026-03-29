import React from "react";

const Certifications = () => {
  const certificationsData = [
    {
      title : "Applied Database Systems 23ai",
      institution: "Oracle Academy",
    },
    {
      title: "Introduction to Python",
      institution: "Infosys Springboard",
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
      title: "Fundamentals of Computers and Programming",
      institution: "CHRIST (Deemed to be University)",
    },
    {
      title: "Leadership Skills Development 1",
      institution: "CHRIST (Deemed to be University)",
    },
    {
      title: "Leadership Skills Development 2",
      institution: "CHRIST (Deemed to be University)",
    },
    {
      title: "Communication Skills Development 2",
      institution: "CHRIST (Deemed to be University)",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-4">
          My Certifications
        </h2>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-2xl mx-auto">
          Professional certifications and courses that demonstrate my expertise and commitment to continuous learning
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cer, index) => (
            <div
              key={index}
              className="bg-blue-900/50 border border-blue-700/50 rounded-lg p-6 hover:bg-blue-900/70 hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-200 mb-3">
                {cer.title}
              </h3>
              <div className="border-t border-blue-700/30 pt-4">
                <p className="text-gray-400 text-sm">
                  {cer.institution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/40 border border-blue-700/30 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-300 mb-2">{certificationsData.length}</p>
            <p className="text-gray-400">Total Certifications</p>
          </div>
          <div className="bg-blue-900/40 border border-blue-700/30 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-300 mb-2">{new Set(certificationsData.map(c => c.institution)).size}</p>
            <p className="text-gray-400">Institutions</p>
          </div>
          <div className="bg-blue-900/40 border border-blue-700/30 rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-300 mb-2">8</p>
            <p className="text-gray-400">Achievements</p>
          </div>
        </div>
      </div>
      <p id="other-activities"></p>
    </section>
  );
};

export default Certifications;