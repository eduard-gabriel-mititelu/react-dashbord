import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="dashboard-layout">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <div className="dashboard-content">
            <Header onMenuClick={() => setIsSidebarOpen(true)} />

            <main className="dashboard-main">
                <Outlet />
            </main>
        </div>
    </div>
  );
}

export default Layout;