import database from '../database/database';
import { SqlEnum } from '../database/sqlEnum';
import Group from '../models/Group';
import { IRepository } from './iRepository';
import { IModel } from '../models/IModel';

export default class GroupRepository implements IRepository {
    public getItemById(id: number): Promise<Group> {
        return database.executeQuery(SqlEnum.Get, new Group(), id) as Promise<Group>;
    }
    public updateItem(id: number, model: Group): Promise<Group> {
        return database.executeQuery(SqlEnum.Update, model, id) as Promise<Group>;
    }
    public deleteItem(id: number): Promise<Group> {
        return database.executeQuery(SqlEnum.Delete, new Group(), id) as Promise<Group>;
    }
    public createItem(model: Group): Promise<Group> {
        return database.executeQuery(SqlEnum.Insert, model, undefined) as Promise<Group>;
    }
    public getAll(): Promise<Array<Group>> {
        return database.executeQuery(SqlEnum.Get, new Group(), undefined) as Promise<Array<Group>>;
    }
}
