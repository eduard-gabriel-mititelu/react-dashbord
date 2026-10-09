function StatCard({ title, value, change, color }) {
    return (
        <div className="stat-card">
            <p className="stat-card-title">{title}</p>
            <h3 className="stat-card-value">{value}</h3>
            <p className={`stat-card-change ${color}`}>{change}</p>
        </div>
    )
}

export default StatCard;