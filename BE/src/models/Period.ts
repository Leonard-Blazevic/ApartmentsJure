import {IModel} from './IModel';

export default class Period implements IModel {
    public id: number;
    public arrivalDate: string;
    public departureDate: string;
    public groupId: number;

    /*public equals(period: Period): boolean {
        return this.id === period.id;
    }*/
}
