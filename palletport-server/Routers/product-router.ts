import { Router } from 'express';

const productRouter = Router();

productRouter.post('./products');
productRouter.get('./products/:productId');
productRouter.post('./products/:productId');
productRouter.delete('./products/:productId');

export default productRouter;