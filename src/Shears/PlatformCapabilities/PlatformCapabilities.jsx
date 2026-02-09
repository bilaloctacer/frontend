import React from "react";

const PlatformCapabilities = () => {
  const features = [
    {
      id: 1,
      title: "Portfolio Oversight",
      description:
        "Live view of all projects and delivery progress across the organization.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Risk & Escalation Management",
      description:
        "Proactive identification and escalation of risks, delays, and exceptions requiring leadership intervention.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Governance & Accountability",
      description:
        "End-to-end audit trail of updates, approvals, decisions, and changes to support governance and compliance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M12 7v5l4 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc]">

      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Platform Capabilities
          </h2>
          <p className="text-lg text-muted-foreground">
            Structured tools to track execution, surface issues, document
            decisions, and maintain an auditable record of progress across the
            enterprise portfolio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-7">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="fade-in-up group rounded-xl border border-[#e1e7ef] bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e5f1f3] text-[#037e8e] transition-all duration-300 group-hover:bg-[#037e8e] group-hover:text-white">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-center text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-center text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;
