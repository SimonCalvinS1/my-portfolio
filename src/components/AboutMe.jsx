import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* About Content */}
          <div className="space-y-2">
            <header className="text-2xl font-semibold text-blue-700">
              Hello, <p className="text-blue-700">I am Simon Calvin S.</p>
            </header>
            <p className="px-3 text-gray-600">
              I'm a passionate web developer with expertise in React, Node.js, Python and modern technologies. 
              With a strong foundation in both frontend and backend development, I create engaging and 
              user-friendly web applications. I have experience working with MySQL and Supabase (PostgreSQL) databases.
              When I'm not working with websites, I enjoy exploring data analytics and machine learning.
            </p>
            
            {/* Area of Expertise */}
            <div className="pt-4">
              <header className="text-xl text-blue-700 font-extrabold leading-relaxed">Area of Expertise: </header>
              <div className="px-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm leading-relaxed">Full Stack Web Development</span>
                <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm leading-relaxed">Mobile App Development</span>
                <span className="px-3 py-1 bg-blue-400 text-white rounded-full text-sm leading-relaxed">Database Management</span>
                <span className="px-3 py-1 bg-pink-400 text-white rounded-full text-sm leading-relaxed">Data Structures and Algorithms</span>
                <span className="px-3 py-1 bg-orange-400 text-white rounded-full text-sm leading-relaxed">Python Programming</span>
                <span className="px-3 py-1 bg-cyan-400 text-white rounded-full text-sm leading-relaxed">Cross-Team Collaboration</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQGljWXNAUhYLg/profile-displayphoto-shrink_400_400/B56ZRqaOGaGsAg-/0/1736952051614?e=1762387200&v=beta&t=0BJneHA0b-_AbfBhIXWjrp-LxfEAL_HQDcoaXpBRYbA"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;