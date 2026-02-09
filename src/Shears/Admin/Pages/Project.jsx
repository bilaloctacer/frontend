import React from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <main className="py-6 px-4 sm:px-6">
      <div className="section-container space-y-6">
        {/* ===== Header / Hero ===== */}
        <div className="relative px-6 pt-8 pb-6 hero-gradient rounded-2xl bg-[#0e8b9b]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-primary-foreground text-white">
                Projects
              </h1>
              <p className="text-primary-foreground/80 text-white">
                Progress tracking and execution management
              </p>
            </div>

            <NavLink
              to="/admin/projects/new"
              className={({ isActive }) =>
                `
    inline-flex items-center gap-2
    px-4 py-2 text-sm font-semibold
    rounded-md cursor-pointer
    transition-colors
    ${
      isActive
        ? "bg-[#016a78] text-white"
        : "bg-[#017b8b] text-white hover:bg-[#016a78]"
    }
  `
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14M5 12h14"
                />
              </svg>
              Add Project
            </NavLink>
          </div>
        </div>

        {/* ===== Search & Filter ===== */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1 max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              className="flex h-10 w-full rounded-md border px-3 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Search projects or companies..."
            />
          </div>

          <button className="flex h-10 items-center gap-2 rounded-md border px-3 text-sm">
            <span>All</span>
          </button>
        </div>

        {/* ===== Projects List ===== */}
        <div className="rounded-xl border bg-card overflow-hidden">
          {/* Table Head (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 gap-2 px-4 py-3 bg-muted/50 border-b text-xs font-semibold uppercase">
            <div className="col-span-3">Project Name</div>
            <div className="col-span-2">Company</div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-2 text-center">Progress</div>
            <div className="col-span-3 text-center">Status</div>
          </div>

          {/* Single Project Row (example) */}
          <a
            href="/portal/admin/projects/p1"
            className="block px-4 py-3 hover:bg-secondary/50 transition"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                📁
              </div>

              <div className="flex-1">
                <h3 className="font-semibold truncate">
                  Digital Transformation Initiative
                </h3>
                <p className="text-sm text-muted-foreground">
                  Acme Corporation
                </p>
              </div>

              <span className="text-sm font-semibold">35%</span>

              <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                Critical
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
