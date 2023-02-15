import express from 'express';
import { pool } from './db';
import offerRouter from './Routers/offer-router.js';
import orderRouter from './Routers/order-router.js';
import productRouter from './Routers/product-router.js';
import productCategoryRouter from './Routers/productCategory-router.js';
import userRouter from './Routers/user-router.js';

const PORT = process.env.PORT ?? 5300;

const app = express();

app.use(express.json());

app.use('/api', offerRouter);
app.use('/api', orderRouter);
app.use('/api', productRouter);
app.use('/api', productCategoryRouter);
app.use('/api', userRouter);

const startServer = async () => {
    try {
        app.listen(PORT, () => console.log('It work WOW!'));
    } catch (error) {
        console.error(error);
    }
}

startServer();