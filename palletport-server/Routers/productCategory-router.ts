import { Router } from 'express';

const productCategoryRouter = Router();

productCategoryRouter.post('./productCategories');
productCategoryRouter.get('./productCategories/:productCategoryId');
productCategoryRouter.post('./productCategories/:productCategoryId');
productCategoryRouter.delete('./productCategories/:productCategoryId');

export default productCategoryRouter;