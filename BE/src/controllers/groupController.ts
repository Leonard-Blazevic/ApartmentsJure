import { Request, Response } from 'express';
import GroupRepository from '../repositories/groupRepository';
import Group from '../models/Group';

export class GroupController {
    private groupRepository: GroupRepository = new GroupRepository();

    public updateGroup = (req: Request, res: Response): void => {
        let group: Group = new Group();
        group.representativeFirstName = 'Ivan';
        group.representativeLastName = 'Ivic';
        group.numberOfAdults = 2;
        group.numberOfChildren = 2;
        group.ageComment = 'Mala djeca.';
        group.reservationSource = 'ApartmentsJure';
        group.totalPayment = 1500;
        group.avans = 450;
        group.paymentComment = 'Placeno';
        group.reservationDate = '2017-09-30 16:34:22';
        group.mail = 'ivan.ivic@gmail.com';

        this.groupRepository.updateItem(1, group).then((response: any) => {
            res.send(response);
        });
    }

    public getAllGroups = (req: Request, res: Response): void => {
        console.log(this);
        this.groupRepository.getAll().then((response: any) => {
            res.send(response);
        });
    }

    public getGroup = (req: Request, res: Response): void => {
        this.groupRepository.getItemById(1).then((response: any) => {
            res.send(response);
        });
    }

    public deleteGroup = (req: Request, res: Response): void => {
        this.groupRepository.deleteItem(2).then((response: any) => {
            res.send(response);
        });
    }

    public insertGroup = (req: Request, res: Response): void => {
        let group: Group = new Group();
        group.representativeFirstName = 'Ivan';
        group.representativeLastName = 'Ivic';
        group.numberOfAdults = 2;
        group.numberOfChildren = 2;
        group.ageComment = 'Mala djeca.';
        group.reservationSource = 'ApartmentsJure';
        group.totalPayment = 1500;
        group.avans = 450;
        group.paymentComment = 'Placeno';
        group.reservationDate = '2017-09-30 16:34:22';
        group.mail = 'ivan.ivic@gmail.com';

        this.groupRepository.createItem(group).then((response: any) => {
            res.send(response);
        });
    }
}

const groupController: GroupController = new GroupController();

export default groupController;
