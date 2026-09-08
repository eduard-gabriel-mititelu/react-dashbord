import {orders} from "../data/dashboardData.js";

function OrderTable() {
    return (
        <section className="orders-card">
            <div className="orders-header">
                <div>
                    <h2>Recent Orders</h2>
                    <p>Latest orders from your customers</p>
                </div>

                <button>View All</button>
            </div>

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.product}</td>
                                <td>
                                    <span className={`status ${order.status.toLowerCase()}`}>
                                        {order.status}</span>
                                </td>
                                <td>{order.amount}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default OrderTable;