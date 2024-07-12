import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
      setProducts(response.data);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
      setProducts(products.filter(product => product._id !== id));
    });
  };

  return (
    <>
    <AdminNavbar />
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={product._id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => editProduct(product._id)}>Edit</Button>
                <Button color="secondary" onClick={() => deleteProduct(product._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

function editProduct(id) {
  // Implement edit product logic here
}

export default AdminProducts;
