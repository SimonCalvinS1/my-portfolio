import React from "react";

const Certifications = () => {
  const certificationsData = [
    {
      title: "CBIT Hackathon 2025",
      institution: "Chaitanya Bharathi Institute of Technology, Hyderabad",
    },
    {
      title : "Applied Database Systems 23ai",
      institution: "Oracle Academy",
    },
    {
      title: "Java for Beginners",
      institution: "Infosys Springboard",
    },
    {
      title: "Learning Full Stack Development",
      institution: "Infosys Springboard",
    },
    {
      title: "Introduction to Python",
      institution: "Infosys Springboard",
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
      <div className="mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-3xl font-semibold text-center text-white mb-8">
          My Certifications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-8">
          {certificationsData.map((cer, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-4">
                {cer.title}
              </h2>
              <h3 className="text-gray-300 text-right font-medium mb-1">
                {cer.institution}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <p id="achievements"></p>
    </div>
  );
};

export default Certifications;