import { Search } from "lucide-react";
import { useState } from "react";

import {orders} from "../data/dashboardData.js";

function OrderTable() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredOrders = orders.filter((order) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch = order.id.toLowerCase().includes(search) || order.customer.toLowerCase().includes(search)
            || order.product.toLowerCase().includes(search);

        const matchesStatus = statusFilter === "All" || order.status === statusFilter;

        return (
            matchesSearch && matchesStatus
        )
    })

    return (
        <section className="orders-card">
            <div className="orders-header">
                <div>
                    <h2>Recent Orders</h2>
                    <p>Latest orders from your customers</p>
                </div>

                <button>View All</button>

                <label className="search-label">
                    <Search className="search-icon"/>
                    <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    placeholder="Search by order..."
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="search-input"
                    />
                </label>

                <select
                    value={statusFilter}
                    onChange={(event) => {setStatusFilter(event.target.value)}}
                    className="dropdown"
                >
                    <option value="All">All statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Canceld">Cancelled</option>
                </select>
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
                        {filteredOrders.map((order) => (
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