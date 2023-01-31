import express from 'express';

const PORT = process.env.PORT ?? 5300;

const app = express();

const startServer = (): void => {
    try {
        app.listen(PORT, () => console.log('It work WOW!'));
    } catch (error) {
        console.error(error);
    }
}

startServer();