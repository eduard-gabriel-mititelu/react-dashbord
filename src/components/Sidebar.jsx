function Sidebar() {
  return (
    <aside className="sidebar">
        <div className="sidebar-logo">Dashboard</div>
        <nav className="sidebar-nav">
                <a href="#" className="active">Dashboard</a>
                <a href="#">Analytics</a>
                <a href="#">Customers</a>
                <a href="#">Orders</a>
                <a href="#">Products</a>
                <a href="#">Settings</a>
        </nav>
    </aside>
  );
}

export default Sidebar;