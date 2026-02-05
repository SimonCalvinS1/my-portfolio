import React from 'react';

function OtherActivities() {
  const activites = [
    {
        id: 1,
        title: "Grade 10 CBSE 2022 - English 100% Proficiency",
        description:
          "Achieved 100% proficiency in English in the Grade 10 CBSE examinations, reflecting my strong command of the language and academic excellence.",
    },
    {
      id: 2,
      title: "CBIT Hacktoberfest 2025 - Participant",
      description:
        "Participated in CBIT Hacktoberfest 2025, a one day online hackathon, developing a multi-vendor e-commerce website along with my teammates.",
    },
    {
      id: 3,
      title: "Hospitality Volunteer - Industry Academia Nexus 2025 - School of Sciences",
      description:
        "Managed hospitality services to the chief guests who had arrived from various companies like Tech Mahindra, IBM Chennai, Tata Power Solar, and more. Managed eateries and refreshments for the guests during the event. Coordinated with hospitality team members to ensure smooth functioning of hospitality services during the event.",
    },
  ];

  return (
    <section className="py-6 mt-4">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-3">
            Other Activities
          </h2>
          <p className="text-white text-lg">
            Highlights of my accomplishments and contributions.
          </p>
        </header>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {activites.map((ac) => (
            <div
              key={ac.id}
              className="bg-blue-900/60 rounded-2xl shadow-md"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-yellow-300 leading-snug">
                    {ac.title}
                  </h3>
                </div>

                <p className="text-white">{ac.description}</p>
                <div className="mt-5 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherActivities;
