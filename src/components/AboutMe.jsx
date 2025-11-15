import React from "react";
import { Code, Database, Brain, Laptop, Linkedin, Github } from "lucide-react"; // Modern icons

function AboutMe() {
  const skillstyling =
    "px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium tracking-wide hover:bg-blue-700 transition-all duration-200";

  return (
    <section className="py-6">
      <div id="about" className="mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-blue-800 mb-3">About Me</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A quick glance at who I am, what I do, and the skills I bring to the table.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-xl p-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Hello, I'm Simon Calvin S.
          </h2>
          <p className="text-gray-800 text-lg mb-4 leading-relaxed">
            I'm a passionate <span className="font-semibold text-blue-700">web developer</span> with expertise in React, Node.js, and Python. 
            I enjoy building engaging, user-friendly web and mobile applications with strong backend integration.
            With a solid foundation in both frontend and backend development, I've worked with databases like 
            <span className="font-semibold text-blue-700"> MySQL</span> and 
            <span className="font-semibold text-blue-700"> Supabase (PostgreSQL)</span>. 
            When I'm not coding, I love exploring <span className="font-semibold">data analytics</span> and 
            <span className="font-semibold"> machine learning</span>.
            I'm an aspiring <span className="font-semibold text-blue-700">Full Stack Developer</span> and 
            <span className="font-semibold text-blue-700"> Data Analyst</span>. 
            I enjoy working in collaborative teams and applying critical thinking to solve real-world problems.
            Previously, I interned as a Full Stack Mobile App Developer at <span className="font-semibold">Christ Incubation Centre</span>, 
            where I built a mobile event registration app using Flutter and Node.js.
          </p>

          {/* Expertise Section */}
          <div className="mb-5">
            <h3 className="text-2xl text-blue-700 font-semibold mb-3 flex items-center gap-2">
              My Areas of Expertise
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className={skillstyling}>MERN Stack Web Developer</span>
              <span className={skillstyling}>Mobile App Developer</span>
              <span className={skillstyling}>Database Management</span>
              <span className={skillstyling}>Data Structures & Algorithms</span>
              <span className={skillstyling}>Cross-Team Collaboration</span>
              <span className={skillstyling}>Critical Thinking</span>
              <span className={skillstyling}>Python Programming</span>
              <span className={skillstyling}>Java Programming</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl text-blue-700 font-semibold flex items-center gap-1">Social Links</h3>
            <nav className="flex gap-6 text-lg">
              <a
                href="https://www.linkedin.com/in/simon-calvin-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-800 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href="https://github.com/SimonCalvinS1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-900 hover:text-blue-500 transition-colors"
              >
                <p id="experience" className="mt-12"></p>
                <Github className="w-5 h-5" /> GitHub
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
