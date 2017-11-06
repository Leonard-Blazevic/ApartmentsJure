import {IModel} from './IModel';

export default class OldGuest implements IModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public yearOfFirstArrival: number;
    public comment: string;
    public onlyNegotiated: boolean;
    public email: string;

    public equals(oldGuests: OldGuest): boolean {
        return this.id === oldGuests.id;
    }
}
