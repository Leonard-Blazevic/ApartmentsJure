import { Router, Request, Response, NextFunction } from 'express';
import publicController from '../controllers/publicController';
import periodController from '../controllers/periodController';
import groupController from '../controllers/groupController';
import pictureController from '../controllers/pictureController';
import oldGuestController from '../controllers/oldGuestController';
import specialOfferController from '../controllers/specialOfferController';

class PublicRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init(): void {
        this.router.get('/', publicController.getIndex);

        // period routes
        this.router.get('/getPeriod', periodController.getPeriod);
        this.router.get('/getAllPeriods', periodController.getAllPeriods);
        this.router.get('/deletePeriod', periodController.deletePeriod);
        this.router.get('/updatePeriod', periodController.updatePeriod);
        this.router.get('/insertPeriod', periodController.insertPeriod);

        // group routes
        this.router.get('/getGroup', groupController.getGroup);
        this.router.get('/getAllGroups', groupController.getAllGroups);
        this.router.get('/deleteGroup', groupController.deleteGroup);
        this.router.get('/updateGroup', groupController.updateGroup);
        this.router.get('/insertGroup', groupController.insertGroup);

        // picture routes
        this.router.get('/getPicture', pictureController.getPicture);
        this.router.get('/getAllPictures', pictureController.getAllPictures);
        this.router.get('/deletePicture', pictureController.deletePicture);
        this.router.get('/updatePicture', pictureController.updatePicture);
        this.router.get('/insertPicture', pictureController.insertPicture);

        // oldGuest routes
        this.router.get('/getOldGuest', oldGuestController.getOldGuest);
        this.router.get('/getAllOldGuests', oldGuestController.getAllOldGuests);
        this.router.get('/deleteOldGuest', oldGuestController.deleteOldGuest);
        this.router.get('/updateOldGuest', oldGuestController.updateOldGuest);
        this.router.get('/insertOldGuest', oldGuestController.insertOldGuest);

        // specialOffer routes
        this.router.get('/getSpecialOffer', specialOfferController.getSpecialOffer);
        this.router.get('/getAllSpecialOffer', specialOfferController.getAllSpecialOffers);
        this.router.get('/deleteSpecialOffer', specialOfferController.deleteSpecialOffer);
        this.router.get('/updateSpecialOffer', specialOfferController.updateSpecialOffer);
        this.router.get('/insertSpecialOffer', specialOfferController.insertSpecialOffer);
    }
}
const publicRouter: PublicRouter = new PublicRouter();

export default publicRouter;
