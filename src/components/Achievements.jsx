import React from 'react';

function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Annual Catechism Examination 2017 - 3rd Place",
      description:
        "Secured 3rd place in the Annual Catechism Examination conducted by the Diocese of Bangalore in 2017, showcasing my dedication and knowledge in religious studies.",
    },
    {
      id: 2,
      title: "Sciplore 2018 - 3rd Place",
      description:
        "Achieved 3rd place in Sciplore, a science exhibition organized by St Joseph's School (CBSE) in 2020, demonstrating my passion and aptitude for scientific inquiry and innovation.",
    },
    {
      id: 3,
      title: "Annual Catechism Examination 2018 - 1st Place",
      description:
        "Won 1st place in the Annual Catechism Examination conducted by the Diocese of Bangalore in 2018, reflecting my continued excellence and commitment to religious education.",
    },
    {
        id: 4,
        title: "Ignation Week 2019 Quiz - 3rd Place",
        description:
          "Secured 3rd place in the Ignation Week Quiz organized by St Joseph's School (CBSE) in 2019, highlighting my quick thinking and broad knowledge across various subjects.",
    },
    {
        id: 5,
        title: "Sciplore 2019 - 1st Place",
        description:
          "Achieved 1st place in Sciplore, a science exhibition organized by St Joseph's School (CBSE) in 2019, showcasing my innovative approach and deep understanding of scientific concepts.",
    },
    {
        id: 6,
        title: "Annual Catechism Examination 2019 - 1st Place",
        description:
          "Won 1st place in the Annual Catechism Examination conducted by the Diocese of Bangalore in 2019, demonstrating my consistent dedication and expertise in religious studies.",
    },
    {
        id: 7,
        title: "Grade 10 CBSE - English 100% Proficiency",
        description:
          "Achieved 100% proficiency in English in the Grade 10 CBSE examinations, reflecting my strong command of the language and academic excellence.",
    },
    {
        id: 8,
        title: "Sciplore 2022 - 2nd Place",
        description:
          "Secured 2nd place in Sciplore, a science exhibition organized by St Joseph's School (CBSE) in 2022, highlighting my continued passion and skill in scientific exploration and presentation.",
    },
    {
        id: 9,
        title: "Tarang 2022 - Meme Creation - 1st Place",
        description:
          "Won 1st place in the Meme Creation contest during Tarang 2022 at St Joseph's School (CBSE), showcasing my creativity and humor in digital content creation.",
    },
    {
        id: 10,
        title: "Scavenger Hunt 2022 - 1st Place",
        description:
          "Achieved 1st place in the Scavenger Hunt organized at St Joseph's School (CBSE), demonstrating my problem-solving skills and teamwork abilities.",
    },
    {
        id: 11,
        title: "Mathematics Day 2023 - Mathematics Competition - 1st Place",
        description:
            "Secured 1st place in the Mathematics Competition during Mathematics Day 2023 at St Joseph's School (CBSE), reflecting my strong analytical skills and passion for mathematics.",
    }
  ];

  return (
    <section className="py-6 mt-4">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-3">
            Achievements
          </h2>
          <p className="text-white text-lg">
            Highlights of my accomplishments and contributions.
          </p>
        </header>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-blue-900/60 rounded-2xl shadow-md"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-yellow-300 leading-snug">
                    {ach.title}
                  </h3>
                </div>

                <p className="text-white">{ach.description}</p>

                <div className="mt-5 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
