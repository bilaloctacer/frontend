import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainTable from "../../Table/Table";
import InputComponent from "../../InputComponent/InputComponent";
import { Search } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Digital Transformation Initiative",
      type: "Collab",
      company: "Acme Corporation +1",
      owner: "John",
      due: "31 Dec",
      progress: "35%",
      status: "Critical",
    },
    {
      name: "ERP System Upgrade",
      type: "Solo",
      company: "Global Solutions Ltd",
      owner: "Sarah",
      due: "30 Sept",
      progress: "60%",
      status: "At Risk",
    },
    {
      name: "Customer Portal Development",
      type: "Collab",
      company: "TechVentures Inc +1",
      owner: "Mike",
      due: "15 Aug",
      progress: "75%",
      status: "On Track",
    },
    {
      name: "Customer Portal Development",
      type: "Collab",
      company: "TechVentures Inc +1",
      owner: "Mike",
      due: "15 Aug",
      progress: "75%",
      status: "Completed",
    },
  ];

  const options = ["All", "On Track", "At Risk", "Critical", "Completed"];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
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
        : "bg-[#017b8b] text-white hover:bg-[#016a78] rounded-2xl"
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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />

            <InputComponent
              type="text"
              placeholder="Search projects or companies..."
              inputClass="

      ps-8
      
    "
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative w-full sm:w-[200px]">
            <button
              onClick={() => setOpen(!open)}
              className="
        flex h-10 w-full items-center justify-between
        rounded-md border border-slate-200
        bg-slate-100 px-3
        text-sm text-slate-700
        transition
        hover:bg-slate-50
        focus:outline-none focus:ring-2 focus:ring-cyan-500
      "
            >
              <div className="flex items-center gap-2">
                {/* Filter Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>

                <span>{selected}</span>
              </div>

              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown */}
            {open && (
              <div className="p-2 absolute z-50 mt-2 w-full rounded-lg border border-slate-200 bg-white shadow-md">
                {options.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                    className={`
              flex w-full items-center justify-between
              px-3 py-2 text-sm
              mb-1
              transition
              hover:bg-cyan-600 hover:text-white
              ${selected === item ? "bg-cyan-700 text-white rounded-lg" : "text-slate-700 rounded-lg"}
            `}
                  >
                    <span>{item}</span>

                    {selected === item && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ===== Projects List ===== */}
        <div className="rounded-xl border border-slate-200 bg-card overflow-hidden">
          <MainTable projects={projects} />
        </div>
      </div>
    </main>
  );
};

export default Projects;
