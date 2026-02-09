import React from "react";

const steps = [
  {
    id: "01",
    title: "Projects are added & defined",
    description:
      "All projects enter the system with defined milestones, timelines, and accountability owners.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Progress is tracked & monitored",
    description:
      "Automated monitoring identifies issues, delays, and risks that require leadership attention.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Leadership gains ongoing oversight",
    description:
      "Leadership reviews delivery performance, milestone progress, and escalated risks across our active dashboard.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
];

const OperatingModel = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">
            Operating Model
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            A disciplined governance workflow that embeds review cycles,
            escalation paths, and decision ownership into day-to-day execution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute bottom-[60%] left-0 right-0 hidden h-px bg-gray-200 lg:block " />

          <div className="grid gap-16 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#007a8a] text-sm font-bold text-white">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#dfedf0] text-[#007a8a]">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-gray-600">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-xs text-md leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;
