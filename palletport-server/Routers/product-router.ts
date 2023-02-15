import { Router } from 'express';
import productController from '../Controller/product-controller.js';

const productRouter = Router();

productRouter.post('/products', productController.createProduct);
productRouter.get('/products/:productId', productController.getProduct);
productRouter.post('/products/:productId', productController.updateProduct);
productRouter.delete('/products/:productId', productController.deleteProduct);

export default productRouter;