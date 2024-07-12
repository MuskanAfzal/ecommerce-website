import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"

function AdminPanel() {
  return (
    <>
    <AdminNavbar />
    <div>
      <h1>Admin Panel</h1>
      <ul>
        <li><Link to="/adminproducts">Manage Products</Link></li>
        <li><Link to="/admincategories">Manage Categories</Link></li>
        <li><Link to="/adminorders">Manage Orders</Link></li>
      </ul>
    </div>
    </>
  );
}

export default AdminPanel;
