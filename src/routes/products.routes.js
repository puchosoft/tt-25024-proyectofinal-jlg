// products.routes.js
import { Router } from 'express';
import productController from '../controllers/productController.js';

const router = Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/create', productController.addProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
