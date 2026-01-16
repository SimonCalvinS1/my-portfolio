import React from "react";
import { Linkedin, Github, LucideCodeXml } from "lucide-react";

function AboutMe() {
  const skillStyling =
    "px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition";

  return (
    <section id="about" className="py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-15">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-3">
            About Me
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            A quick glance at who I am, what I do, and the skills I bring to the table.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          I am Simon Calvin S,
        </h2>

        <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
          a passionate{" "}
          <span className="font-semibold text-cyan-400">Data Analyst</span>{" "}
          with expertise in <span className="text-blue-300 font-semibold">Python</span>, {" "}
          <span className="text-green-300 font-semibold">Excel</span>, {" "}
          <span className="text-blue-400 font-semibold">SQL</span>, {" "}
          <span className="text-yellow-300 font-semibold">PowerBI</span> {" "}
          and <span className="text-blue-500 font-semibold">Tableau</span>.
          I enjoy creating data visualisation using these technologies.
          With experience in{" "}
          <span className="text-blue-400 font-semibold">MySQL</span>, and {" "}
          <span className="text-green-400 font-semibold">MongoDB</span>,{" "}
          I am comfortable managing both local and cloud databases.
          I am building my skills in data analysis and visualization through various projects and coursework.
        </p>
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
          Currently, I am pursuing my Bachelor's in Computer Applications at{" "}
          <span className="font-semibold text-yellow-400">Christ University, Bangalore</span>.
          Here, you can look at my projects in the <a href="#projects" className="text-blue-400 underline">Projects Section</a>.
          I have an internship experience working as a Software Developer at{" "}
          <span className="font-semibold text-yellow-400">Christ Incubation and Consultancy Foundation (CICF)</span>,
          prototyping SOCIO, an event registration platform (mobile app).
        </p>

        {/* Expertise */}
        <div className="mb-8">
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4">
              My Areas of Expertise
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Python Programming",
                "Microsoft Excel & Google Sheets",
                "Exploratory Data Analysis (EDA)",
                "SQL & NoSQL Databases",
                "PowerBI & Tableau",
                "Data Structures & Algorithms",
                "Cross-Team Collaboration",
                "Critical Thinking",
              ].map(skill => (
                <span key={skill} className={skillStyling}>
                  {skill}
                </span>
              ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl sm:text-2xl text-white font-semibold mt-4 mb-2">
              Social Links
            </h3>

            <nav className="flex flex-col sm:flex-row gap-4 text-base">
              <a
                href="https://www.linkedin.com/in/simon-calvin-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-300 hover:text-blue-500"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>

              <a
                href="https://github.com/SimonCalvinS1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-gray-500"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>

              <a
                href="https://leetcode.com/u/SimonCalvinS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-400 hover:text-orange-600"
              >
                <LucideCodeXml className="w-5 h-5" /> LeetCode
              </a>
            </nav>
          </div>
        </div>
      </div>
      <p id="experience"></p>
    </section>
  );
}

export default AboutMe;
