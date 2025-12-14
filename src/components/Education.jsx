import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor's of Computer Applications",
      institution: "Christ University, Bangalore",
      duration: "June 2024 - Present",
      description:
        "Engaging in Computer Science with coursework in Web Development, Python and Java Programming.",
    },
    {
      title: "High School Education (Grades 5-12)",
      institution: "St. Joseph's School (CBSE), Bangalore",
      duration: "June 2016 - May 2024",
      description:
        "Completed high school education in science as the major course in grades 11 and 12. I learned fundamental knowledge in mathematics, physics, chemistry and computer science.",
    },
    {
      title: "Primary Education (Grades KG-4)",
      institution: "Cambridge School, KH Road, Bangalore",
      duration: "June 2010 - May 2016",
      description:
        "Basic school level education with focus on holistic development, academics, etc.",
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Education
        </h1>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-2xl shadow-m p-6"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-1">
                {edu.title}
              </h2>
              <h3 className="text-gray-200 font-medium mb-1">
                {edu.institution}
              </h3>
              <p className="text-gray-400 mb-3">{edu.duration}</p>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p id="projects"></p>
    </div>
  );
};

export default Education;
