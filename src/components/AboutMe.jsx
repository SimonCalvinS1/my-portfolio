import React from "react";
import { Linkedin, Github, LucideCodeXml } from "lucide-react";

function AboutMe() {
  const skillStyling =
    "px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition";

  return (
    <section id="about" className="py-16 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            About Me
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            A quick glance at who I am, what I do, and the skills I bring to the table.
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-900/60 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            I am Simon Calvin S,
          </h2>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
            a passionate{" "}
            <span className="font-semibold text-blue-400">Data Analyst</span>{" "}
            with expertise in Python, Excel, SQL, PowerBI and Tableau.
            I enjoy creating data visualisation using these technologies.
            <br /><br />
            With experience in{" "}
            <span className="text-blue-400 font-semibold">MySQL</span>,{" "}
            <span className="text-blue-400 font-semibold">MongoDB</span> and{" "}
            <span className="text-blue-400 font-semibold">PostgreSQL (Supabase)</span>,
            I am comfortable managing both local and cloud databases.
            <br /><br />
            Previously, I have interned as a Software Developer at{" "}
            <span className="font-semibold text-blue-400">
              Christ Incubation Centre
            </span>, working on SOCIO, an event registration platform using
            Figma, Next.js, Tailwind CSS, Flutter and Supabase.
          </p>

          {/* Expertise */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4">
              My Areas of Expertise
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Data Analysis",
                "Data Visualization",
                "SQL & NoSQL Databases",
                "PowerBI",
                "Tableau",
                "MERN Stack Web Developer",
                "Mobile App Developer",
                "Database Management",
                "Data Structures & Algorithms",
                "Cross-Team Collaboration",
                "Critical Thinking",
                "Cloud Computing",
                "DBaaS & BaaS",
                "Python Programming",
                "Java Programming"
              ].map(skill => (
                <span key={skill} className={skillStyling}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4">
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
                className="flex items-center gap-2 text-gray-200 hover:text-gray-400"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>

              <a
                href="https://leetcode.com/u/SimonCalvinS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-300 hover:text-orange-500"
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
