import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import {stats} from "../data/dashboardData";
import RevenueChart from "../components/RevenueChart";
import OrderTable from "../components/OrderTable";

function Dashboard() {
  return (
    <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-content">
            <Header />
            <main>
                <div className="dashboard-intro">
                    <h2>Welcome back!</h2>
                    <p>Here is what's happening with your business today.</p>
                </div>

                <section className="stats-grid">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.id}
                            title={stat.title}
                            value={stat.value}
                            change={stat.change}
                        />
                    ))}
                </section>

                <RevenueChart />

                <OrderTable />

            </main>
        </div>
    </div>
  );
}

export default Dashboard;