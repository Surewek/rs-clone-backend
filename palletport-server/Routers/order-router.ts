import { Router } from 'express';
import orderController from '../Controller/order-controller.js';

const orderRouter = Router();

orderRouter.post('/orders', orderController.createOrder);
orderRouter.get('/orders/:orderId', orderController.getOrder);
orderRouter.post('/orders/:orderId', orderController.updateOrder);
orderRouter.delete('/orders/:orderId', orderController.deleteOrder);
orderRouter.get('/orders/findByStatus', orderController.getSortedOrders);

export default orderRouter;
