import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";
import OrderTable from "../components/OrderTable";

import {stats} from "../data/dashboardData";

function Dashboard() {

    return (
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
                        color={`${Number(stat.change.replace('%', '')) < 0 ? 'negative' : 'positive'}`}
                    />
                ))}
            </section>

            <RevenueChart />

            <OrderTable />

        </main>
    );
}

export default Dashboard;