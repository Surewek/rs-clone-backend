import { Router } from 'express';
import offerController from '../Controller/offer-controller.js';

const offerRouter = Router();

offerRouter.post('/offers', offerController.createOffer);
offerRouter.get('/offers/findByStatus', offerController.getOffer);
offerRouter.post('/offers/:offerId', offerController.updateOffer);
offerRouter.delete('/offers/:offerId', offerController.deleteOffer);
offerRouter.post('/offers/:offerId/uploadImage', offerController.createOfferImage);

export default offerRouter;
