import { experienceData } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          職務経歴
        </h2>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-8 pb-8"
            >
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[10px] top-0"></div>
              <div className="mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                {exp.period}
              </div>
              <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
              <div className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                {exp.position}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <div>
                <h4 className="font-semibold mb-2">主な実績：</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2">
                        ✓
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
