const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const { auth, isAdmin } = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/admin/create', auth, isAdmin, userController.registerAdmin);

module.exports = router;
