import { Request, Response } from 'express';
import SpecialOfferRepository from '../repositories/specialOfferRepository';
import SpecialOffer from '../models/SpecialOffer';

export class SpecialOfferController {
    private specialOfferRepository: SpecialOfferRepository = new SpecialOfferRepository();

    public updateSpecialOffer = (req: Request, res: Response): void => {
        let specialOffer: SpecialOffer = new SpecialOffer();
        specialOffer.startTime = '2017-08-31 16:34:22';
        specialOffer.finishTime = '2017-09-30 16:34:22';
        specialOffer.price = 1;
        specialOffer.description = 'Special offer';

        this.specialOfferRepository.updateItem(1, specialOffer).then((response: any) => {
            res.send(response);
        });
    }

    public getAllSpecialOffers = (req: Request, res: Response): void => {
        console.log(this);
        this.specialOfferRepository.getAll().then((response: any) => {
            res.send(response);
        });
    }

    public getSpecialOffer = (req: Request, res: Response): void => {
        this.specialOfferRepository.getItemById(1).then((response: any) => {
            res.send(response);
        });
    }

    public deleteSpecialOffer = (req: Request, res: Response): void => {
        this.specialOfferRepository.deleteItem(2).then((response: any) => {
            res.send(response);
        });
    }

    public insertSpecialOffer = (req: Request, res: Response): void => {
        let specialOffer: SpecialOffer = new SpecialOffer();
        specialOffer.startTime = '2017-08-31 16:34:22';
        specialOffer.finishTime = '2017-09-30 16:34:22';
        specialOffer.price = 1;
        specialOffer.description = 'Special offer';

        this.specialOfferRepository.createItem(specialOffer).then((response: any) => {
            res.send(response);
        });
    }
}

const specialOfferController: SpecialOfferController = new SpecialOfferController();

export default specialOfferController;
