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
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-3xl font-semibold text-center text-blue-400 mb-3">
          My Certifications
        </h1>
        <p className="text-white text-center text-lg mb-8">
          Highlights of my certifications and courses completed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificationsData.map((cer, index) => (
            <div
              key={index}
              className="bg-blue-900/60 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-yellow-300 mb-4">
                {cer.title}
              </h2>
              <h3 className="text-gray-300 text-right text-white font-medium mb-1">
                - {cer.institution}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <p id="other-activities"></p>
    </div>
  );
};

export default Certifications;