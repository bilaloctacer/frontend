import React from "react";

const aboutItems = [
  {
    id: 1,
    title: "About Rasd",
    description:
      "Rasd is an enterprise portfolio governance platform designed to provide leadership with a clear, continuous view of project performance, milestone progress, and delivery risk.",
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
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Purpose",
    description:
      "In large organizations, delivery commitments and risks are fragmented across teams. Rasd creates a single trusted environment for execution visibility.",
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
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Governance Challenges Addressed",
    description:
      "Rasd addresses governance gaps such as limited visibility, delayed escalation, and inconsistent follow-up on delivery commitments.",
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
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Accountability By Design",
    description:
      "Every project, milestone, and action in Rasd is assigned a clear owner, ensuring traceability, auditability, and disciplined execution.",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 px-6">
      <div className="section-container">
        <div className="mx-auto max-w-3xl space-y-16">
          {aboutItems.map((item, index) => (
            <div
              key={item.id}
              className={`fade-in-up stagger-${index + 1}`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#dfedf0] text-[#007a8a]">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h2 className="mb-3 text-2xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
