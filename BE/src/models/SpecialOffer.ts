import { IModel } from './IModel';

export default class SpecialOffer implements IModel {
    public id: number;
    public startTime: string;
    public finishTime: string;
    public price: number;
    public description: string;

    public equals(specialOffer: SpecialOffer): boolean {
        return this.id === specialOffer.id;
    }
}
