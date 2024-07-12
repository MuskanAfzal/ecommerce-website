const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const productController = require('../controllers/productControllers');
const { auth, isAdmin } = require('../middleware/authMiddleware');

router.get('/', auth, isAdmin, productController.getAllProducts);
router.post('/', auth, isAdmin, [
    body('name').not().isEmpty().trim().escape(),
    body('price').isNumeric(),
    body('categoryId').not().isEmpty()
], productController.createProduct);
router.put('/:id', auth, isAdmin, productController.updateProduct);
router.delete('/:id', auth, isAdmin, productController.deleteProduct);

module.exports = router;
