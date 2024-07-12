const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');
const { auth, isAdmin } = require('../middleware/authMiddleware');

router.get('/', auth, isAdmin, orderController.getOrders);
router.post('/', auth, orderController.createOrder);
router.put('/:id', auth, isAdmin, orderController.updateOrderStatus);

module.exports = router;
