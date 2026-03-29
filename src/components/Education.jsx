import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Computer Applications",
      institution: "Christ University Central Campus, Hosur Road, Bangalore",
      duration: "June 2024 - Present",
      description:
        "Engaging in Computer Science with coursework in Python, Java, Discrete Mathematics, Graph Theory, SQL and NoSQL.",
    },
    {
      title: "High School Education (Grades 5-12)",
      institution: "St. Joseph's School (CBSE), Vittal Mallya Road, Bangalore",
      duration: "June 2016 - May 2024",
      description:
        "Completed high school education in science as the major course in grades 11 and 12.",
    },
    {
      title: "Primary Education (Grades KG-4)",
      institution: "Cambridge School, Double Road, Bangalore",
      duration: "June 2010 - May 2016",
      description:
        "Basic school level education from grades KG-4, with focus on academic, languages and holistic education and development.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-300 mb-4">
            Education
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A summary of my academic background and qualifications.
          </p>
        </header>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-blue-900/50 border border-blue-700/50 rounded-lg p-6 hover:bg-blue-900/70 hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-blue-200 mb-2">
                {edu.title}
              </h2>
              <p className="text-gray-400 text-sm mb-3">{edu.duration}</p>
              <div className="border-t border-blue-700/30 pt-4 mb-4">
                <h3 className="text-gray-400 font-medium text-sm mb-2">
                  {edu.institution}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
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
