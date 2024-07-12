import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
      setOrders(response.data);
    });
  }, []);

  const updateOrderStatus = (id, status) => {
    axios.put(`/api/orders/${id}`, { status }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
      setOrders(orders.map(order => order._id === id ? response.data : order));
    });
  };

  return (
    <>
    <AdminNavbar />
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order._id}>
              <TableCell>{order.products.map(p => p.product.name).join(', ')}</TableCell>
              <TableCell>{order.user.username}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => updateOrderStatus(order._id, 'shipped')}>Ship</Button>
                <Button color="secondary" onClick={() => updateOrderStatus(order._id, 'delivered')}>Deliver</Button>
                <Button color="default" onClick={() => updateOrderStatus(order._id, 'cancelled')}>Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default AdminOrders;
