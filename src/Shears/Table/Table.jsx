import React from "react";

function MainTable({ projects = [] }) {
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

          <tbody className="divide-y divide-slate-100">
            {projects.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {/* Project */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-700 shrink-0">
                    📁
                  </div>
                  <span className="font-medium text-gray-900">{item.name}</span>
                </td>

                {/* Type */}
                <td className="px-4 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === "Collab"
                        ? "bg-[#1b8797] text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                {/* Company */}
                <td className="px-4 py-4 text-gray-700">{item.company}</td>

                {/* Owner */}
                <td className="px-4 py-4">{item.owner}</td>

                {/* Due Date */}
                <td className="px-4 py-4">{item.due}</td>

                {/* Progress */}
                <td className="px-4 py-4 font-semibold">{item.progress}</td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`w-24 flex items-center justify-center px-4 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Critical"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "At Risk"
                          ? "bg-orange-100 text-orange-700"
                          : item.status === "Completed"
                            ? "bg-sky-300 text-blue-500"
                            : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainTable;
