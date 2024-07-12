import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function AdminNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <Button color="inherit" component={Link} to="/adminproducts">Products</Button>
        <Button color="inherit" component={Link} to="/admincategories">Categories</Button>
        <Button color="inherit" component={Link} to="/adminorders">Orders</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AdminNavbar;
