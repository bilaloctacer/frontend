import { Outlet } from "react-router-dom";
import AdminNav from "../Shears/Admin/Pages/AdminNav/AdminNav";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
