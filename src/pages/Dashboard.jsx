import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import {stats} from "../data/dashboardData";
import RevenueChart from "../components/RevenueChart";
import OrderTable from "../components/OrderTable";
import { useState } from "react";

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="dashboard-layout">
            <Sidebar 
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <div className="dashboard-content">
                <Header 
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
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