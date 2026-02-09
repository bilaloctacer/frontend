import { Outlet } from "react-router-dom";
import MainHeader from "../Components/Header/Index.jsx";
import MainFooter from "../Components/Footer/Index.jsx";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <MainHeader />
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
};

export default MainLayout;
