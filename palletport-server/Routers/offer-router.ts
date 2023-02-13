import { Router } from 'express';

const offerRouter = Router();

offerRouter.post('./offers');
offerRouter.get('./offers/findByStatus');
offerRouter.post('./offers/:offerId');
offerRouter.delete('./offers/:offerId');
offerRouter.post('./offers/:offerId/uploadImage');

export default offerRouter;
