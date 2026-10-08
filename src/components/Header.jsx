import { Menu, User, Bell, Search } from 'lucide-react';

function Header({ onMenuClick }) {
  return (
    <header className="header">
        <button 
          onClick={onMenuClick} 
          aria-label="Open navuigation"
          className="menu-button"
        >
            <Menu size={22} />
        </button>
        <h1>Dashboard</h1>

        <div className="header-actions">
            <button aria-label="Search">
                <Search size={20} />
            </button>
            <button aria-label="Notifications">
                <Bell size={20} />
            </button>
            <button aria-label="Profile">
                <User size={20} />
            </button>
        </div>
    </header>
  );
}

export default Header;