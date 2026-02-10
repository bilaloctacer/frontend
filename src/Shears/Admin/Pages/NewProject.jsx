import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainModal from "../../Modal/MainModal";
import InputComponent from "../../InputComponent/InputComponent";
import TextareaComponent from "../../TextareaComponent/TextareaComponent";
const NewProject = () => {
  const [openModal, setOpenModal] = useState(false);

  // 🔹 Project Owners State
  const [owners, setOwners] = useState([{ id: 1, isPrimary: true }]);

  const addOwner = () => {
    setOwners((prev) => [
      ...prev,
      {
        id: Date.now(),
        isPrimary: false,
        name: "",
        company: "",
        email: "",
      },
    ]);
  };

  const removeOwner = (id) => {
    setOwners((prev) => prev.filter((o) => o.id !== id));
  };

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      milestoneName: "",
      dueDate: "",
      description: "",
    },
  ]);

  // 🔹 Add Milestone
  const addMilestone = () => {
    setMilestones((prev) => [
      ...prev,
      {
        id: Date.now(),
        milestoneName: "",
        dueDate: "",
        description: "",
      },
    ]);
  };

  const deleteMilestone = (id) => {
    setMilestones((prev) => prev.filter((item) => item.id !== id));
  };

  // Formik Form
  const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
    initialValues: {
      companies: [],
      unit: "",
      department: "",
      proName: "",
      description: "",
      startDate: "",
      endDate: "",
      budget: "",
      milestones: [
        {
          id: 1,
          milestoneName: "",
          dueDate: "",
          description: "",
        },
      ],
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      // .max(15 ,  "Must be 15 characters or less")
      // .required("User Name required"),
      // email: Yup.string()
      // .email("Invalid email address") .required("Require"),
      // password: Yup.string()
      // .min(8 , "Password Must be at least 8 characters" ),
      // confirmPassword : Yup.string()
      // .confirmPassword
    }),

    onSubmit: (values) => {
      console.log("values", { values });
    },
  });

  useEffect(() => {
    setFieldValue("owners", owners);
  }, [owners]);

  return (
    <>
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
          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl  ">
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
                      onClick={() => setOpenModal(true)}
                      className="
          inline-flex items-center gap-1.5
          h-9 px-3
          text-sm font-medium
          rounded-md
          border border-slate-200
          bg-slate-100
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
                        name="companies"
                        value={company}
                        checked={values.companies.includes(company)}
                        onChange={handleChange}
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
                    name="unit"
                    placeholder="Enter unit name"
                    value={values.unit}
                    onChange={handleChange}
                  />

                  <InputComponent
                    label="Department"
                    id="department"
                    name="department"
                    placeholder="Enter department name"
                    value={values.department}
                    onChange={handleChange}
                  />
                </div>

                {/* Project Name */}
                <div className="space-y-2">
                  <InputComponent
                    label="Project Name"
                    id="proName"
                    name="proName"
                    placeholder="Enter project name"
                    required
                    value={values.proName}
                    onChange={handleChange}
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <TextareaComponent
                    label="Description"
                    id="description"
                    name="description"
                    placeholder="Detailed project description..."
                    required
                    minLength={100}
                    value={values.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Project Owners
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                </div>

                {owners.map((owner, index) => (
                  <div
                    key={owner.id}
                    className="rounded-lg border border-slate-200 p-4 space-y-4"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {owner.isPrimary
                          ? "Primary Owner"
                          : `Project Owner ${index + 1}`}
                        <span className="text-red-500 ml-1">*</span>
                      </span>

                      {!owner.isPrimary && (
                        <button
                          type="button"
                          onClick={() => removeOwner(owner.id)}
                          className="text-xs text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    {/* Inputs */}
                    <div className="grid gap-4 sm:grid-cols-3">
                      <InputComponent
                        id={"Name"}
                        name="name"
                        type="text"
                        placeholder="Owner name"
                        label="Name"
                        value={owner?.name}
                        onChange={(e) => {
                          const updatedOwners = owners.map((o) =>
                            o.id === owner.id
                              ? {
                                  ...o,
                                  name: e.target.value,
                                }
                              : o,
                          );

                          setOwners(updatedOwners);
                        }}
                      />
                      <InputComponent
                        id={"company"}
                        type="text"
                        name="company"
                        placeholder="Company name"
                        label="Company (Optional)"
                        value={owner?.company}
                        onChange={(e) => {
                          const updatedOwners = owners.map((o) =>
                            o.id === owner.id
                              ? {
                                  ...o,
                                  company: e.target.value,
                                }
                              : o,
                          );

                          setOwners(updatedOwners);
                        }}
                      />

                      <InputComponent
                        id={"email"}
                        type="email"
                        name="email"
                        placeholder="owner@company.com"
                        label="Emails (Optional)"
                        value={owner?.email}
                        onChange={(e) => {
                          const updatedOwners = owners.map((o) =>
                            o.id === owner.id
                              ? {
                                  ...o,
                                  email: e.target.value,
                                }
                              : o,
                          );

                          setOwners(updatedOwners);
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* ADD OWNER BUTTON */}
                <div>
                  <button
                    type="button"
                    onClick={addOwner}
                    className="
      inline-flex items-center justify-center gap-2
      w-full h-9 px-3
      rounded-md
      text-sm font-medium
      border border-slate-100
      bg-background
      transition-all duration-200
      hover:bg-[#188695] hover:text-white
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
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    Add another project Owner (optional)
                  </button>
                </div>

                {/* Dates */}
                <div className="grid gap-4 sm:grid-cols-3 pb-6">
                  <InputComponent
                    id="startDate"
                    label="Start Date"
                    name="startDate"
                    type="date"
                    value={values.startDate}
                    onChange={handleChange}
                  />

                  <InputComponent
                    id="endDate"
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={values.endDate}
                    onChange={handleChange}
                  />

                  <InputComponent
                    id={"budget"}
                    label="Budget (Optional)"
                    name="budget"
                    type="number"
                    placeholder="0.00"
                    min="0"
                    value={values.budget}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-white rounded-lg border border-slate-200 bg-card text-card-foreground shadow-sm">
              {/* Header */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-black">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M12 13v8" /> <path d="M12 3v3" />
                            <path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold">Milestones</h3>
                      <p className="text-sm text-muted-foreground">
                        At least one milestone is required
                      </p>
                    </div>
                  </div>

                  {/* ✅ ADD BUTTON */}
                  <button
                    type="button"
                    onClick={addMilestone}
                    className="
          inline-flex items-center gap-2
          h-9 px-3
          text-sm font-medium
          rounded-md
          border border-slate-200
          bg-slate-100
          text-slate-700
          hover:bg-[#188695]
          hover:text-white
          transition-all
        "
                  >
                    <span className="text-xl leading-none">+</span>
                    Add Milestone
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-0 space-y-4">
                {milestones.map((item, index) => (
                  <div
                    key={item.id}
                    className="rounded-lg border-2 border-slate-100 p-4 space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="inline-block text-sm font-medium text-muted-foreground">
                        Milestone {index + 1}
                      </span>
                      {index !== 0 && (
                        <button
                          type="button"
                          onClick={() => deleteMilestone(item.id)}
                          className="text-slate-400 hover:text-red-600 transition"
                          title="Delete milestone"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                          </svg>
                        </button>
                      )}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <InputComponent
                        label="Milestone Name"
                        placeholder="Enter milestone name"
                        value={item.name}
                        onChange={(e) =>
                          handleChange(index, "name", e.target.value)
                        }
                      />

                      <InputComponent
                        label="Due Date"
                        type="date"
                        value={item.dueDate}
                        onChange={(e) =>
                          handleChange(index, "dueDate", e.target.value)
                        }
                      />
                    </div>

                    <TextareaComponent
                      label="Description"
                      placeholder="Milestone description..."
                      value={item.description}
                      onChange={(e) =>
                        handleChange(index, "description", e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="py-4 inline-flex items-center gap-2
    h-10 px-3
    text-sm font-medium
    rounded-md
    bg-[#188695]
    hover:bg-[#237681]
    text-white
    border-slate-100
    transition-all duration-200
    cursor-pointer"
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
      <MainModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Upload Project Charter"
        description="Upload a Word document (.docx) to auto-fill the form fields."
        submitText="Parse & Fill"
        cancelText="Cancel"
      />
    </>
  );
};

export default NewProject;
