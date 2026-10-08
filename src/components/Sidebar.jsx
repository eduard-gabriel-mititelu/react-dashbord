import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Package,
  X
} from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <LayoutDashboard size={24} />
          <span>AdminPanel</span>
        </div>
        <button
          className="close-sidebar"
          aria-label="Close navigation"
          onClick={onClose}
        >
          <X size={22} />
        </button>
        <nav className="sidebar-nav">
                <a href="#" className="active">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </a>
                <a href="#">
                    <BarChart3 size={20} />
                    <span>Analytics</span>
                </a>
                <a href="#">
                    <Users size={20} />
                    <span>Customers</span>
                </a>
                <a href="#">
                    <ShoppingCart size={20} />
                    <span>Orders</span>
                </a>
                <a href="#">
                    <Package size={20} />
                    <span>Products</span>
                </a>
                <a href="#">
                    <Settings size={20} />
                    <span>Settings</span>
                </a>
        </nav>
    </aside>
  );
}

export default Sidebar;