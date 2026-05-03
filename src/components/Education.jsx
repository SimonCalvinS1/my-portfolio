import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Computer Applications",
      institution: "Christ University Central Campus, Hosur Road, Bangalore",
      duration: "June 2024 - Present",
      description:
        "Engaging in Computer Science with coursework in Python, SQL and NoSQL databases and data analytics. Actively involved in projects to apply theoretical knowledge in real-world scenarios.",
    },
    {
      title: "High School Education (Grades 5-12)",
      institution: "St. Joseph's School (CBSE), Vittal Mallya Road, Bangalore",
      duration: "June 2016 - May 2024",
      description:
        "Achieved 100/100 score in Grade 10 CBSE English examination, reflecting strong academic performance and language proficiency. Specialised in Science and Mathematics during grades 11-12, with a focus on Physics, Chemistry, Mathematics and Computer Science (PCMC).",
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
