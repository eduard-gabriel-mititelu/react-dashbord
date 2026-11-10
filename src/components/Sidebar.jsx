import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Package,
  X
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/dashboard" onClick={onClose}>
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/analytics" onClick={onClose}>
                    <BarChart3 size={20} />
                    <span>Analytics</span>
                </NavLink>
                <NavLink to="/customers" onClick={onClose}>
                    <Users size={20} />
                    <span>Customers</span>
                </NavLink>
                <NavLink to="/orders" onClick={onClose}>
                    <ShoppingCart size={20} />
                    <span>Orders</span>
                </NavLink>
                <NavLink to="/products" onClick={onClose}>
                    <Package size={20} />
                    <span>Products</span>
                </NavLink>
                <NavLink to="/settings" onClick={onClose}>
                    <Settings size={20} />
                    <span>Settings</span>
                </NavLink>
        </nav>
    </aside>
  );
}

export default Sidebar;