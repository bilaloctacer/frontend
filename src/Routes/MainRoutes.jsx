import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../Layout/MainLayout.jsx";
import AdminLayout from "../Layout/AdminLayout.jsx";

// Public Pages
import Home from "../Shears/Pages/Home/Index.jsx";
import About from "../Shears/Pages/About/Index.jsx";
import LogIn from "../Shears/Pages/LogIn/Index.jsx";
import Error from "../Shears/Pages/Error/Index.jsx";

// Admin Pages
import AdminHome from "../Shears/Admin/Pages/Home.jsx";
import Project from "../Shears/Admin/Pages/Project.jsx";
import Milestones from "../Shears/Admin/Pages/Milestones.jsx";
import Companies from "../Shears/Admin/Pages/Companies.jsx";
import NewProject from "../Shears/Admin/Pages/NewProject.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="projects" element={<Project />} />
        <Route path="projects/new" element={<NewProject />} />
        <Route path="milestones" element={<Milestones />} />
        <Route path="companies" element={<Companies />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRoutes;
