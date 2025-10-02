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
          <div className="space-y-2">
            <header className="text-2xl font-semibold text-gray-800">
              Hello, <p className="text-blue-700">I am Simon Calvin S!</p>
            </header>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. 
              With a strong foundation in both frontend and backend development, I create engaging and 
              user-friendly web applications. I have experience working with MySQL and Supabase databases.
              When I'm not working with websites, I enjoy exploring data analytics and machine learning.
            </p>
            
            {/* Skills */}
            <div className="pt-4">
              <header className="text-xl text-green-900 font-extrabold leading-relaxed">Area of Expertise</header>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-200 text-red-700 rounded-full text-sm leading-relaxed">Full Stack Web Development</span>
                <span className="px-3 py-1 bg-yellow-200 text-red-700 rounded-full text-sm leading-relaxed">Mobile App Development</span>
                <span className="px-3 py-1 bg-blue-200 text-red-700 rounded-full text-sm leading-relaxed">Database Management</span>
                <span className="px-3 py-1 bg-pink-200 text-red-700 rounded-full text-sm leading-relaxed">Data Structures and Algorithms</span>
                <span className="px-3 py-1 bg-orange-200 text-red-700 rounded-full text-sm leading-relaxed">Cross-Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;