import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import Dashboard from './pages/Dashboard.jsx';
import Analythics from './pages/Analythics.jsx';
import Customers from './pages/Customers.jsx';
import Orders from './pages/Orders.jsx';
import Products from './pages/Products.jsx';
import Settings from './pages/Settings.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analythics />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;