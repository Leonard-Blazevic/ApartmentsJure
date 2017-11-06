import { Request, Response } from 'express';
import OldGuestRepository from '../repositories/oldGuestRepository';
import OldGuest from '../models/OldGuest';

export class OldGuestController {
    private oldGuestRepository: OldGuestRepository = new OldGuestRepository();

    public updateOldGuest = (req: Request, res: Response): void => {
        let oldGuest: OldGuest = new OldGuest();
        oldGuest.firstName = 'Ivana';
        oldGuest.lastName = 'Ivanovic';
        oldGuest.yearOfFirstArrival = 2015;
        oldGuest.comment = 'Stari gost.';
        oldGuest.onlyNegotiated = false;
        oldGuest.email = 'ivana.ivanovic@gmail.com';

        this.oldGuestRepository.updateItem(1, oldGuest).then((response: any) => {
            res.send(response);
        });
    }

    public getAllOldGuests = (req: Request, res: Response): void => {
        console.log(this);
        this.oldGuestRepository.getAll().then((response: any) => {
            res.send(response);
        });
    }

    public getOldGuest = (req: Request, res: Response): void => {
        this.oldGuestRepository.getItemById(1).then((response: any) => {
            res.send(response);
        });
    }

    public deleteOldGuest = (req: Request, res: Response): void => {
        this.oldGuestRepository.deleteItem(2).then((response: any) => {
            res.send(response);
        });
    }

    public insertOldGuest = (req: Request, res: Response): void => {
        let oldGuest: OldGuest = new OldGuest();
        oldGuest.firstName = 'Ivana';
        oldGuest.lastName = 'Ivanovic';
        oldGuest.yearOfFirstArrival = 2015;
        oldGuest.comment = 'Stari gost.';
        oldGuest.onlyNegotiated = false;
        oldGuest.email = 'ivana.ivanovic@gmail.com';

        this.oldGuestRepository.createItem(oldGuest).then((response: any) => {
            res.send(response);
        });
    }
}

const oldGuestController: OldGuestController = new OldGuestController();

export default oldGuestController;
