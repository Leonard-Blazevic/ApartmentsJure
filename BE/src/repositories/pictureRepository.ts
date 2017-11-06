import database from '../database/database';
import { SqlEnum } from '../database/sqlEnum';
import Picture from '../models/Picture';
import { IRepository } from './iRepository';
import { IModel } from '../models/IModel';

export default class PictureRepository implements IRepository {
    public getItemById(id: number): Promise<Picture> {
        return database.executeQuery(SqlEnum.Get, new Picture(), id) as Promise<Picture>;
    }
    public updateItem(id: number, model: Picture): Promise<Picture> {
        return database.executeQuery(SqlEnum.Update, model, id) as Promise<Picture>;
    }
    public deleteItem(id: number): Promise<Picture> {
        return database.executeQuery(SqlEnum.Delete, new Picture(), id) as Promise<Picture>;
    }
    public createItem(model: Picture): Promise<Picture> {
        return database.executeQuery(SqlEnum.Insert, model, undefined) as Promise<Picture>;
    }
    public getAll(): Promise<Array<Picture>> {
        return database.executeQuery(SqlEnum.Get, new Picture(), undefined) as Promise<Array<Picture>>;
    }
}
