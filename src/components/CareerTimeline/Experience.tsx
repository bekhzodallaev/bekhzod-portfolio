
import React from 'react'

const experiences = [
  {
    role: "Software Engineer",
    company: "Gotogether LLC",
    date: "Feb 2025 — Present",
    location: "Remote / Warsaw, Poland",
    bullets: [
      "Delivered end-to-end full-stack features for a ride-sharing platform (5,000+ daily trips, 3,000 active users).",
      "Implemented trip lifecycle, matching, and booking workflows, improving booking speed by 35% and reducing failed matches by 20%.",
      "Integrated Stripe API and Google Maps SDK for real-time tracking, maintaining 99.9% system uptime.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Andersen Lab",
    date: "Sep 2024 — Jul 2025",
    location: "Warsaw, Poland",
    bullets: [
      "Reduced frontend development time by 20% by building 15+ reusable React components integrated with NestJS APIs.",
      "Achieved 85% code coverage using Jest and RTL, reducing production bugs by 15%.",
      "Architected microservices communication using Redis caching, reducing API latency by 40%.",
    ],
  },
  {
    role: "Frontend Web Engineer Intern",
    company: "Xperi Inc.",
    date: "Jul 2023 — Oct 2023",
    location: "Warsaw, Poland",
    bullets: [
      "Built dynamic web components with JavaScript and Vue 3.",
      "Integrated third-party APIs, increasing user satisfaction by 20%.",
      "Optimized CSS animations and load times by 30%.",
    ],
  },
];

const  Experience = () => {
  return (
    <div className="mt-12">
      {/* title */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-[24px] font-bold whitespace-nowrap">
          Experience
        </h2>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

      {/* list */}
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-[20px]">
                  {exp.role}
                </h3>
                <p className="text-gray-700">
                  {exp.company}
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-800 font-medium">
                  {exp.date}
                </p>
                <p className="text-gray-500 italic">
                  {exp.location}
                </p>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience
