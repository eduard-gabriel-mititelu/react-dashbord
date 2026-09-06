function Header() {
  return (
    <header className="header">
        <h1>Dashboard</h1>

        <div className="header-actions">
            <button>Search</button>
            <button>Notifications</button>
            <button>Profile</button>
        </div>
    </header>
  );
}

export default Header;