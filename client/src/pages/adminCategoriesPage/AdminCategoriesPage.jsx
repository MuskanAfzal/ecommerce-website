import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig'; // Use the configured Axios instance
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [categoryForm, setCategoryForm] = useState({ name: '', description: '', icon: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const deleteCategory = (id) => {
    axios.delete(`/categories/${id}`)
      .then(response => {
        setCategories(categories.filter(category => category._id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the category!", error);
      });
  };

  const handleClickOpen = (category = { name: '', description: '', icon: '' }) => {
    setCategoryForm(category);
    setIsEditMode(Boolean(category._id));
    setCurrentCategoryId(category._id || null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCategoryForm({ name: '', description: '', icon: '' });
    setIsEditMode(false);
    setCurrentCategoryId(null);
  };

  const handleChange = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append('name', categoryForm.name);
    uploadData.append('description', categoryForm.description);
    if (selectedFile) {
      uploadData.append('icon', selectedFile);
    } else if (categoryForm.icon) {
      uploadData.append('icon', categoryForm.icon);
    }

    const url = isEditMode ? `/categories/${currentCategoryId}` : '/categories';
    const method = isEditMode ? 'put' : 'post';

    axios({
      method: method,
      url: url,
      data: uploadData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(response => {
        if (isEditMode) {
          setCategories(categories.map(category => category._id === currentCategoryId ? response.data : category));
        } else {
          setCategories([...categories, response.data]);
        }
        handleClose();
      })
      .catch(error => {
        console.error(`There was an error ${isEditMode ? 'updating' : 'adding'} the category!`, error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <Button variant="outlined" color="primary" onClick={() => handleClickOpen()}>
        Add Category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditMode ? 'Edit Category' : 'Add New Category'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name, description, and icon of the category.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Category Name"
            type="text"
            fullWidth
            value={categoryForm.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={categoryForm.description}
            onChange={handleChange}
          />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="icon-file"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="icon-file">
            <IconButton color="primary" component="span">
              <CloudUploadIcon /> Upload Icon
            </IconButton>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {isEditMode ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Icon</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map(category => (
              <TableRow key={category._id}>
                <TableCell>
                  {category.icon ? (
                    <img src={`http://localhost:5000/api/categories/icon/${category.icon}`} alt={category.name} width="50" />
                  ) : (
                    'No icon'
                  )}
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => handleClickOpen(category)}>Edit</Button>
                  <Button color="secondary" onClick={() => deleteCategory(category._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminCategoriesPage;
