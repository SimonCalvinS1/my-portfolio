import React from "react";
import { Linkedin, Github, LucideCodeXml } from "lucide-react"; // Modern icons

function AboutMe() {
  const skillstyling =
    "px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium tracking-wide hover:bg-blue-700 transition-all duration-200";

  return (
    <section className="py-6">
      <div id="about" className="mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-3">About Me</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A quick glance at who I am, what I do, and the skills I bring to the table.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-xl p-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            I am Simon Calvin S,
          </h2>
          <p className="text-gray-800 text-lg mb-4 leading-relaxed">
            a passionate <span className="font-semibold text-blue-700">software developer</span> with expertise in Figma, MERN Stack, Next.js, Tailwind CSS and React Native. 
            I enjoy building engaging, user-friendly web and mobile applications. I focus on delivering key outcomes, collaborating well with team-based software projects and 
            quickly adapting to learning new technologies in the field of software development. I like to create creative web technologies, be it individual or team-based.
            With a solid foundation in both frontend and backend development, I've worked with databases like 
            <span className="font-semibold text-blue-700"> MySQL</span>,
            <span className="font-semibold text-blue-700"> MongoDB</span> and  
            <span className="font-semibold text-blue-700"> Supabase (PostgreSQL)</span>. 
            I enjoy working in collaborative teams and applying critical thinking to solve real-world problems.
            I have interned as a software developer at Christ Incubation Centre for "Socio", a startup at Christ Central Campus, which is an event registration platform, 
            wherein I developed a prototype of both web and mobile apps working with a diverse tech stack - Figma, Next.js, Tailwind CSS, Flutter and Supabase.
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
              <span className={skillstyling}>Cloud Computing</span>
              <span className={skillstyling}>Database as a Service (DBaaS)</span>
              <span className={skillstyling}>Backend as a Service (BaaS)</span>
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
                className="flex items-center gap-2 text-gray-900 hover:text-gray-500 transition-colors"
              >
                <p id="experience" className="mt-12"></p>
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a 
                href="https://leetcode.com/u/SimonCalvinS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-800 transition-colors">
                  <LucideCodeXml className="w-5 h-5" /> LeetCode
                </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
