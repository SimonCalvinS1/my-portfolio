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
        <h1 className="text-3xl font-semibold text-center text-blue-800 mb-8">
          My Certifications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificationsData.map((cer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-1">
                {cer.title}
              </h2>
              <h3 className="text-gray-800 font-medium mb-1">
                {cer.institution}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;