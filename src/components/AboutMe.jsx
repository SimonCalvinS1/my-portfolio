import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="py-6">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>

          {/* About Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-gray-800">
              Hello, <p className="text-blue-700">I'm Simon Calvin S!</p>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. 
              With a strong foundation in both frontend and backend development, I create engaging and 
              user-friendly web applications. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              I also have experience with databases like MySQL and Supabase.
              When I'm not working with websites, I enjoy exploring data analytics and machine learning.
            </p>
            
            {/* Skills */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Full Stack Web Development</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Mobile App Development</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Database Management</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Data Structures and Algorithms</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Cross-Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;