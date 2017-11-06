import database from '../database/database';
import { SqlEnum } from '../database/sqlEnum';
import Period from '../models/Period';
import { IRepository } from './iRepository';
import { IModel } from '../models/IModel';

export default class PeriodRepository implements IRepository {
    public getItemById(id: number): Promise<Period> {
        return database.executeQuery(SqlEnum.Get, new Period(), id) as Promise<Period>;
    }
    public updateItem(id: number, model: Period): Promise<Period> {
        return database.executeQuery(SqlEnum.Update, model, id) as Promise<Period>;
    }
    public deleteItem(id: number): Promise<Period> {
        return database.executeQuery(SqlEnum.Delete, new Period(), id) as Promise<Period>;
    }
    public createItem(model: Period): Promise<Period> {
        return database.executeQuery(SqlEnum.Insert, model, undefined) as Promise<Period>;
    }
    public getAll(): Promise<Array<Period>> {
        return database.executeQuery(SqlEnum.Get, new Period(), undefined) as Promise<Array<Period>>;
    }
}

