import React from 'react';

function OtherActivities() {
  const activites = [
    {
        id: 1,
        title: "Grade 10 CBSE (July 2022) - English 100% Proficiency",
        description:
          "Achieved 100% proficiency in English in the Grade 10 CBSE examinations, reflecting my strong command of the language and academic excellence.",
    },
    {
      id: 2,
      title: "Hospitality Volunteer (Feb 2025) - Industry Academia Nexus 2025 - School of Sciences",
      description:
        "Managed hospitality services to the chief guests who had arrived from various companies like Tech Mahindra, IBM Chennai, Tata Power Solar, and more. Managed eateries and refreshments for the guests during the event. Coordinated with hospitality team members to ensure smooth functioning of hospitality services during the event.",
    },
    {
      id: 3,
      title: "CBIT Hacktoberfest (Oct 2025) - Participant",
      description:
        "Participated in CBIT Hacktoberfest 2025, a one day online hackathon, developing a multi-vendor e-commerce website along with my teammates.",
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-300 mb-4">
            Other Activities
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Highlights of my accomplishments and contributions.
          </p>
        </header>

        {/* Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activites.map((ac) => (
            <div
              key={ac.id}
              className="bg-blue-900/50 border border-blue-700/50 rounded-lg p-6 hover:bg-blue-900/70 hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-200 mb-4">
                {ac.title}
              </h3>
              <div className="border-t border-blue-700/30 pt-4">
                <p className="text-gray-300 leading-relaxed">{ac.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherActivities;
