import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Package,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
                <Link to="/dashboard" className="active" onClick={onClose}>
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link to="/analytics" onClick={onClose}>
                    <BarChart3 size={20} />
                    <span>Analytics</span>
                </Link>
                <Link to="/customers" onClick={onClose}>
                    <Users size={20} />
                    <span>Customers</span>
                </Link>
                <Link to="/orders" onClick={onClose}>
                    <ShoppingCart size={20} />
                    <span>Orders</span>
                </Link>
                <Link to="/products" onClick={onClose}>
                    <Package size={20} />
                    <span>Products</span>
                </Link>
                <Link to="/settings" onClick={onClose}>
                    <Settings size={20} />
                    <span>Settings</span>
                </Link>
        </nav>
    </aside>
  );
}

export default Sidebar;