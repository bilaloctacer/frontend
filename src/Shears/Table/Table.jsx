import React from "react";

const MainTable = () => {
  const newProjectsData = JSON.parse(localStorage.getItem("projectForm"));

  const projectsArray = newProjectsData ? [newProjectsData] : [];
  return (
    <div className="rounded-xl border border-slate-100 bg-white overflow-hidden">
      {/* Scroll container */}
      <div className="max-h-[70vh] overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left">Project Name</th>
              <th className="px-4 py-4 text-center">Type</th>
              <th className="px-4 py-4">Company</th>
              <th className="px-4 py-4">Owner</th>
              <th className="px-4 py-4">Due Date</th>
              <th className="px-4 py-4">Progress</th>
              <th className="px-4 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="text-center divide-y divide-slate-100">
            {projectsArray?.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {/* Project */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-700 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-[#00838F]"
                    >
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                      <path d="M8 10v4" />
                      <path d="M12 10v2" />
                      <path d="M16 10v6" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.proName || "Data not found"}
                  </span>
                </td>

                {/* Type */}
                <td className="px-4 py-4 text-center ">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === "Collab"
                        ? "bg-[#1b8797] text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.type || "Data not found"}
                  </span>
                </td>

                {/* Company */}
                <td className="px-4 py-4 text-gray-700">
                  {item?.owners[0]?.company || "Data not found"}
                </td>

                {/* Owner */}
                <td className="px-4 py-4">
                  {item?.owners[0]?.name || "Data not found"}
                </td>

                {/* Due Date */}
                <td className="px-4 py-4">{item.due || "Data not found"}</td>

                {/* Progress */}
                <td className="px-4 py-4 font-semibold">
                  {item.progress || "Data not found"}
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`w-24  px-4 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Critical"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "At Risk"
                          ? "bg-orange-100 text-orange-700"
                          : item.status === "Completed"
                            ? "bg-sky-300 text-blue-500"
                            : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.status || "Data not found"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
