import RevenueChart from "../components/RevenueChart"
import StatCard from "../components/StatCard"
import { stats, orders } from "../data/dashboardData"
import {
    groupOrdersByDay,
    fillMissingDays,
    getAnalyticsSummary,
    filterOrdersByDate 
} from "../utils/analyticsUtils";

function Analythics() {
  const startDate = {
    year: 2026,
    month: 10,
    day: 16
  };

  const endDate = {
    year: 2026,
    month: 10,
    day: 19
  };
  const filteredOrders = filterOrdersByDate(
    orders,
    startDate,
    endDate
  );
  const dailyData = groupOrdersByDay(filteredOrders);
  const chartData = fillMissingDays(
    dailyData,
    startDate,
    endDate
  );
  console.log("START DATE:", startDate);
console.log("END DATE:", endDate);
console.log("FILTERED ORDERS:", filteredOrders);
console.log("CHART DATA:", chartData);
  return (
    <main className="dashbord-main analythics-page">
      <div className="dashbord-intro">
        <h2>Analytics</h2>
      </div>

      <section className="stats-grid">
        {stats.map((stat) => (
          <StatCard 
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            color={
              `${Number(stat.change.replace('%', '')) > 0 ? 'positive' : 'negative'}`
            }
          />

        ))}
      </section>

      <RevenueChart 
        data={chartData}
        xAxisDataKey="date"
      />
    </main>
  );
}

export default Analythics;