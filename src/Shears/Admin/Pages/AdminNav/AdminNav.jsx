import { useState } from "react";
import IconLogo from "../../../../assets/Gallery/Icon/RasdLogo.png";
import { NavLink } from "react-router-dom";
import { Home, FolderKanban, Milestone, Building2 } from "lucide-react";
const AdminNav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      label: "Home",
      path: "/admin/home",
      icon: Home,
    },
    {
      label: "Projects",
      path: "/admin/projects",
      icon: FolderKanban,
    },
    {
      label: "Milestones",
      path: "/admin/milestones",
      icon: Milestone,
    },
    {
      label: "Companies",
      path: "/admin/companies",
      icon: Building2,
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* ===== Header ===== */}
      <header className="bg-white border-b">
        <div className="flex items-center justify-between px-6 py-3">
          {/* ===== Left Section ===== */}
          <div className="flex items-center gap-6">
            {/* Hamburger (mobile) */}
            <button
              onClick={() => setOpen(true)}
              className="text-2xl md:hidden"
            >
              ☰
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={IconLogo}
                alt="RASD Logo"
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold text-gray-800">RASD</span>
            </div>

            {/* Menu (desktop) */}
            <nav className="hidden md:flex items-center gap-2 text-sm">
              {navLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `
          flex items-center gap-2 px-3 py-2 rounded-md font-medium
          transition-colors
          ${
            isActive
              ? "text-[#0a7f8f] bg-[#f1f5f9]"
              : "text-gray-600 hover:bg-[#f1f5f9]"
          }
        `
                    }
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* ===== Right Section ===== */}
          <div className="flex items-center gap-4">
            {/* Quick Actions */}
            <button className="hidden md:flex items-center gap-1 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-50">
              + Quick Actions
            </button>

            {/* Executive View */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm">
              <span className="text-cyan-600 font-medium">Executive View</span>
              <span className="text-gray-400">Off</span>
            </div>

            {/* User Avatar */}
            <div className="h-8 w-8 rounded-full bg-cyan-600 flex items-center justify-center text-white text-sm font-semibold cursor-pointer">
              O
            </div>
          </div>
        </div>
      </header>

      {/* ===== Overlay (Mobile) ===== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`md:hidden
    fixed top-0 left-0 z-50 h-full w-64 bg-white border-r shadow-lg
    transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:block
  `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold text-cyan-600">My App</h2>
          <button onClick={() => setOpen(false)} className="md:hidden text-xl">
            ✕
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="p-4 space-y-3">
          <a className="block px-3 py-2 rounded hover:bg-cyan-50 hover:text-cyan-600">
            Dashboard
          </a>
          <a className="block px-3 py-2 rounded hover:bg-cyan-50 hover:text-cyan-600">
            Users
          </a>
          <a className="block px-3 py-2 rounded hover:bg-cyan-50 hover:text-cyan-600">
            Settings
          </a>
          <a className="block px-3 py-2 rounded hover:bg-cyan-50 hover:text-cyan-600">
            Logout
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default AdminNav;
