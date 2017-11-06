import {IModel} from './IModel';

export default class Picture implements IModel {
    public id: number;
    public path: string;
    public order: number;

    public equals(picture: Picture): boolean {
        return this.id === picture.id;
    }
}
