import { Request, Response } from 'express';
import PeriodRepository from '../repositories/periodRepository';
import Period from '../models/Period';

export class PeriodController {
    private periodRepository: PeriodRepository = new PeriodRepository();

    public updatePeriod = (req: Request, res: Response): void => {
        let period: Period = new Period();
        period.arrivalDate = '2017-08-31 16:34:22';
        period.departureDate = '2017-09-30 16:34:22';
        period.groupId = 1;

        this.periodRepository.updateItem(1, period).then((response: any) => {
            res.send(response);
        });
    }

    public getAllPeriods = (req: Request, res: Response): void => {
        console.log(this);
        this.periodRepository.getAll().then((response: any) => {
            res.send(response);
        });
    }

    public getPeriod = (req: Request, res: Response): void => {
        this.periodRepository.getItemById(1).then((response: any) => {
            res.send(response);
        });
    }

    public deletePeriod = (req: Request, res: Response): void => {
        this.periodRepository.deleteItem(2).then((response: any) => {
            res.send(response);
        });
    }

    public insertPeriod = (req: Request, res: Response): void => {
        let period: Period = new Period();
        period.arrivalDate = '2017-08-25 16:34:22';
        period.departureDate = '2017-09-03 16:34:22';
        period.groupId = 1;

        this.periodRepository.createItem(period).then((response: any) => {
            res.send(response);
        });
    }
}

const periodController: PeriodController = new PeriodController();

export default periodController;
