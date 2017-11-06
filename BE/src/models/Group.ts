import {IModel} from './IModel';

export default class Group implements IModel {
    public id: number;
    public representativeFirstName: string;
    public representativeLastName: string;
    public numberOfAdults: number;
    public numberOfChildren: number;
    public ageComment: string;
    public reservationSource: string;
    public totalPayment: number;
    public avans: number;
    public paymentComment: string;
    public reservationDate: string;
    public mail: string;

    public equals(group: Group): boolean {
        return this.id === group.id;
    }
}
