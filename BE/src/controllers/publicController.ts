import { Request, Response } from 'express';
import PeriodRepository from '../repositories/periodRepository';

export class PublicController {
    public getIndex = function (req: Request, res: Response): void {
        res.send('hello world!');
    };
}

const publicController: PublicController = new PublicController();

export default publicController;
