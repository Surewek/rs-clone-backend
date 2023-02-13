import { Router } from 'express';

const orderRouter = Router();

orderRouter.post('./orders');
orderRouter.get('./orders/:orderId');
orderRouter.post('./orders/:orderId');
orderRouter.delete('./orders/:orderId');
orderRouter.get('./orders/findByStatus');

export default orderRouter;
