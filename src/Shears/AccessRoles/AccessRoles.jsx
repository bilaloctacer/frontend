import React from "react";

const AccessRoles = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#158e9e]">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Access &amp; Roles
          </h2>
          <p className="text-lg text-white/80">
            Clearly defined roles that assign accountability, control
            information flow, and provide leadership direct line-of-sight into
            delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Leadership */}
          <div className="rounded-xl border border-border bg-white p-8 card-elevated">
            <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-[#e5f1f3] border border-[#d4e6ea]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8 text-[#037e8e]"
              >
                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                <path d="M5 21h14" />
              </svg>
            </div>

            <h3 className="mb-3 text-center text-lg font-semibold text-gray-900">
              Leadership
            </h3>
            <p className="text-center text-sm leading-relaxed text-gray-600">
              Continuous visibility into project performance, delivery progress,
              and risks affecting milestone achievement
            </p>
          </div>

          {/* Administrator */}
          <div className="rounded-xl border border-border bg-white p-8 card-elevated">
            <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-[#e5f1f3] border border-[#d4e6ea]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8 text-[#037e8e]"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <h3 className="mb-3 text-center text-lg font-semibold text-gray-900">
              Administrator
            </h3>
            <p className="text-center text-sm leading-relaxed text-gray-600">
              Structured follow-up with project owners to track commitments,
              collect delivery updates, maintain records, and initiate
              escalation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessRoles;
