import React from "react";
import { Linkedin, Github, LucideCodeXml } from "lucide-react";

function AboutMe() {
  const skillStyling =
    "px-4 py-1.5 bg-blue-700 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition";

  return (
    <section id="about" className="py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-15">
          <h1 className="text-4xl font-bold text-blue-300 mb-3">
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
          I am a {" "} <span className="font-semibold text-blue-300">Data Analyst</span> and {" "} <span className="font-semibold text-blue-300">QA Engineer</span>, 
          focusing on collaborating well with software projects in the field of data analysis and quality assurance, 
          with experience working in Python, SQL, R and QA Testing. 
        </p>

        <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
          Currently, I am pursuing my Bachelor's of Computer Applications (BCA) at{" "} <span className="font-semibold text-blue-300">Christ University, Bangalore</span>, 
          where I have developed a strong foundation in computer science principles and practical skills.
          I have experience working as an App Developer Intern at{" "} <span className="font-semibold text-blue-300">Christ Incubation and Consultancy Foundation (CICF)</span>,
          prototyping Socio, an online-based event registration platform at Christ Central Campus. I am also a{" "}
          <span className="font-semibold text-blue-300">Co-Founder</span> of CampusHero, a student-led initiative aimed at enhancing 
          campus life through management of student issues and reporting them through online based Mentor-Mentee sessions which are usually conducted offline, helping both students and 
          teachers reduce their workload in performing these sessions offline.
        </p>

        {/* Expertise */}
        <div className="mb-8">
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4">
              My Area of Expertise
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Cross-Team Collaboration",
                "Critical Thinking",
                "Problem Solving",
                "Python Programming",
                "R Programming",
                "Data Visualization",
                "Exploratory Data Analysis (EDA)",
                "SQL & NoSQL Databases"
              ].map(skill => (
                <span key={skill} className={skillStyling}>
                  {skill}
                </span>
              ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl sm:text-2xl text-white font-semibold mt-8 mb-2">
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
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-600"
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
