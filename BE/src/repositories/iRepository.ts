import {IModel} from '../models/IModel';

export interface IRepository {
    getItemById(id: number): Promise<IModel>;
    updateItem(id: number, model: IModel): Promise<IModel>;
    deleteItem(id: number): Promise<IModel>;
    createItem(model: IModel): Promise<IModel>;
    getAll(): Promise<Array<IModel>>;
}
