import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import {revenueData} from '../data/dashboardData.js'

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload || !payload.length) {
        return null;
    }

    return (
        <div className="custom-chart-tooltip">
            <p>{label}</p>
            <h3>
                {(payload[0].value / 100).toLocaleString("ro-RO", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })} USD
            </h3>
        </div>
    );
}

function RevenueChart({data = revenueData, xAxisDataKey = "month"}) {
    return (
        <div className="revenue-chart">
            <div className="chart-header">
                <div>
                    <h2>Revenue</h2>
                    <p>Monthly revenue overview</p>
                </div>
            </div>
            
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid
                            stroke="rgba(180, 195, 255, 0.07)"
                            strokeDasharray="0"
                            vertical={false}
                        />
                        <XAxis
                            dataKey={xAxisDataKey}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#8995b5", fontSize: 12 }}
                            dy={12}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#8995b5", fontSize: 12 }}
                            tickFormatter={(value) => `${value / 100} USD`}
                            width={75}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(167, 139, 250, 0.25)" }} />
                        <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#8884d8" 
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default RevenueChart;