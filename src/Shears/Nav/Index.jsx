import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import IconLogo from "../../assets/Gallery/Icon/RasdLogo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/70 backdrop-blur border-b border-cyan-200"
            : "bg-white"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center relative">
        {/* LEFT: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={IconLogo} alt="Logo" className="h-8" />
          <span className="font-bold text-[#344256] text-lg">RASD</span>
        </Link>

        {/* CENTER: Home / About */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-semibold ${
                isActive ? "text-[#34a0ae]" : "text-[#344256]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-semibold ${
                isActive ? "text-[#34a0ae]" : "text-[#344256]"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* RIGHT: Buttons */}
        <div className="ml-auto hidden md:flex items-center gap-3">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `
              px-4 py-1.5 rounded-md text-sm font-semibold
              transition-colors duration-200
              hover:bg-cyan-600 hover:text-white
              ${isActive ? "text-cyan-600" : "text-[#344256]"}
              `
            }
          >
            Login
          </NavLink>

          {location.pathname !== "/" && (
            <NavLink
              to="/request-access"
              className="px-4 py-1.5 rounded-md bg-cyan-600 text-white text-sm font-semibold hover:bg-cyan-700 transition"
            >
              Request Access
            </NavLink>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} className="ml-auto md:hidden">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-cyan-200">
          <div className="flex flex-col px-4 py-6 space-y-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                px-2 py-2 rounded-md
                text-sm font-semibold
                hover:bg-cyan-100
                transition
                ${
                  isActive
                    ? "bg-[rgba(0,122,134,0.65)] text-white"
                    : "text-[#344256]"
                }
                `
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                px-2 py-2 rounded-md
                text-sm font-semibold
                hover:bg-cyan-100
                transition
                ${
                  isActive
                    ? "bg-[rgba(0,122,134,0.65)] text-white"
                    : "text-[#344256]"
                }
                `
              }
            >
              About
            </NavLink>

            <hr className="border-gray-200 my-2" />

            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                w-full text-center
                px-4 py-2 rounded-md
                border border-cyan-600
                text-sm font-semibold
                transition
                ${isActive ? "text-cyan-600" : "text-cyan-600"}
                `
              }
            >
              Login
            </NavLink>

            {location.pathname !== "/" && (
              <NavLink
                to="/request-access"
                onClick={() => setOpen(false)}
                className="
                  w-full text-center
                  px-4 py-2 rounded-md
                  bg-cyan-600 text-white text-sm font-semibold
                  transition
                "
              >
                Request Access
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
