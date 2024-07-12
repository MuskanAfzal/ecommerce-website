const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');
const { auth, isAdmin } = require('../middleware/authMiddleware');

module.exports = (upload, gfs) => {
  router.get('/', auth, isAdmin, categoryController.getCategories);
  router.post('/', auth, isAdmin, upload.single('icon'), categoryController.createCategory(gfs));
  router.put('/:id', auth, isAdmin, upload.single('icon'), categoryController.updateCategory(gfs));
  router.delete('/:id', auth, isAdmin, categoryController.deleteCategory(gfs));
  router.get('/icon/:filename', auth, isAdmin, categoryController.getCategoryIcon(gfs)); // Serve uploaded files

  return router;
};
