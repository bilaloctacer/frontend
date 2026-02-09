import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../../InputComponent/InputComponent";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";

const NewProject = () => {
  return (
    <main className="py-6 px-4 sm:px-6">
      <div className="section-container space-y-8 ms-4">
        {/* Back Button */}
        <Link
          to="/admin/projects"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            px-3 h-9
            rounded-[8px]
            text-slate-700
            transition-all duration-200
            hover:bg-[#007a8a]
            hover:text-white
          "
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
              d="m12 19-7-7 7-7"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" />
          </svg>
          Back to Projects
        </Link>

        {/* Title */}
        <div className="">
          <h1 className="text-2xl font-bold tracking-tight">
            Create Project Charter
          </h1>
          <p className="text-muted-foreground">
            Define the project details and initial milestones
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 max-w-3xl  ">
          {/* Project Details Card */}
          <div className="rounded-lg bg-white border-slate-100 bg-card shadow-sm">
            <div className="px-6 space-y-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  {/* Left Side */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#007a8a]/10 text-[#007a8a]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                        <path d="M8 10v4" />
                        <path d="M12 10v2" />
                        <path d="M16 10v6" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        Project Details
                      </h3>
                      <p className="text-sm text-slate-500">
                        Basic project information
                      </p>
                    </div>
                  </div>

                  {/* Right Side Button */}
                  <button
                    type="button"
                    className="
                    inline-flex items-center gap-1.5
                    h-9 px-3
                    text-sm font-medium
                    rounded-md
                    border border-slate-200
                    bg-slate-100
                    cursor-pointer
                    transition-all duration-200
                    hover:bg-[#007a8a]
                    hover:text-white
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
                      <path d="m14 7 3 3" />
                      <path d="M5 6v4" />
                      <path d="M19 14v4" />
                      <path d="M10 2v2" />
                      <path d="M7 8H3" />
                      <path d="M21 16h-4" />
                      <path d="M11 3H9" />
                    </svg>
                    Auto-fill
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs">
                  Companies <span className="text-red-600">*</span>
                </div>

                <div>
                  <div className="bg-slate-100 inline-flex items-center gap-1 rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Standalone
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-500">
                Select one company for standalone projects, or multiple
                companies for collaborative projects.
              </div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Acme Corporation",
                  "TechVentures Inc",
                  "Global Solutions Ltd",
                  "Innovate Partners",
                  "Strategic Holdings",
                  "Future Dynamics",
                ].map((company) => (
                  <label
                    key={company}
                    className="
                  flex items-center gap-3
                  rounded-lg border border-slate-100 p-3
                  cursor-pointer transition-all
                  hover:border-[#3796a3]
                  hover:bg-[#f1f5f9]
                  has-[:checked]:border-[#3796a3]
                  has-[:checked]:bg-[#f1f5f9]
                "
                  >
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      className="
                    h-4 w-4 rounded
                    cursor-pointer
                    border border-[#3796a3]
                    accent-[#3796a3]
                  "
                    />

                    {/* Content */}
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-slate-500 shrink-0"
                      >
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
                      </svg>

                      <span className="text-sm font-medium truncate">
                        {company}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <InputComponent
                  label="Unit"
                  id="unit"
                  placeholder="Enter unit name"
                />

                <InputComponent
                  label="Department"
                  id="department"
                  placeholder="Enter department name"
                />
              </div>

              {/* Project Name */}
              <div className="space-y-2">
                <InputComponent
                  label="Project Name"
                  id="name"
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="space-y-2">
                <TextareaComponent
                  label="Description"
                  id="description"
                  placeholder="Detailed project description..."
                  required
                  minLength={100}
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Project Owners
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>

              <div className="rounded-lg border border-slate-200 p-4 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Primary Owner
                    <span className="text-red-500 ml-1">*</span>
                  </span>
                </div>
                {/* Inputs */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <InputComponent
                    label="Name"
                    id="owner-name-1"
                    placeholder="Owner name"
                    required
                  />

                  <InputComponent
                    label="Company (Optional)"
                    id="owner-company-1"
                    placeholder="Company name"
                  />

                  <InputComponent
                    label="Email (Optional)"
                    id="owner-email-1"
                    type="email"
                    placeholder="owner@company.com"
                  />
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="
    inline-flex items-center justify-center gap-2
    w-full h-9 px-3
    rounded-md
    whitespace-nowrap
    text-sm font-medium
    border border-slate-100
    bg-background
    transition-all duration-200
    hover:bg-[#188695] hover:border-slate-100 hover:text-white
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    cursor-pointer
  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-1"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Add another project Owner (optional)
                </button>
              </div>
              {/* Dates */}
              <div className="grid gap-4 sm:grid-cols-3">
                <InputComponent label="Start Date" id="startDate" type="date" />

                <InputComponent label="End Date" id="endDate" type="date" />

                <InputComponent
                  label="Budget (Optional)"
                  id="budget"
                  type="number"
                  placeholder="0.00"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Milestones</h3>

              <div className="space-y-2">
                <label className="text-sm font-medium">Milestone Name</label>
                <input
                  className="w-full h-10 rounded-md border px-3"
                  placeholder="Enter milestone name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Due Date</label>
                <input
                  type="date"
                  className="w-full h-10 rounded-md border px-3"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Create Project
            </button>

            <button
              type="button"
              className="border px-4 py-2 rounded-md hover:bg-accent"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewProject;
