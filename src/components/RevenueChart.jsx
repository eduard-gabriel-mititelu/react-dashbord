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

function RevenueChart() {
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
                    <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#8884d8" 
                            strokeWidth={3}
                            dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default RevenueChart;