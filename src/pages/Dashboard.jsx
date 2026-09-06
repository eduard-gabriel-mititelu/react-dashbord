import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-content">
            <Header />
            <main>
                <h2>Welcome back!</h2>
                <p>Here is what's happening with your business today.</p>
            </main>
        </div>
    </div>
  );
}

export default Dashboard;