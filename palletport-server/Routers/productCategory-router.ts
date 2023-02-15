import { Router } from 'express';
import productCategoryController from '../Controller/productCategory-controller.js';

const productCategoryRouter = Router();

productCategoryRouter.post('/productCategories', productCategoryController.createProductCategory);
productCategoryRouter.get('/productCategories/:productCategoryId', productCategoryController.getProductCategory);
productCategoryRouter.post('/productCategories/:productCategoryId', productCategoryController.updateProductCategory);
productCategoryRouter.delete('/productCategories/:productCategoryId', productCategoryController.deleteProductCategory);

export default productCategoryRouter;