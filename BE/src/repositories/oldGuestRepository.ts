import database from '../database/database';
import { SqlEnum } from '../database/sqlEnum';
import OldGuest from '../models/OldGuest';
import { IRepository } from './iRepository';
import { IModel } from '../models/IModel';

export default class OldGuestRepository implements IRepository {
    public getItemById(id: number): Promise<OldGuest> {
        return database.executeQuery(SqlEnum.Get, new OldGuest(), id) as Promise<OldGuest>;
    }
    public updateItem(id: number, model: OldGuest): Promise<OldGuest> {
        return database.executeQuery(SqlEnum.Update, model, id) as Promise<OldGuest>;
    }
    public deleteItem(id: number): Promise<OldGuest> {
        return database.executeQuery(SqlEnum.Delete, new OldGuest(), id) as Promise<OldGuest>;
    }
    public createItem(model: OldGuest): Promise<OldGuest> {
        return database.executeQuery(SqlEnum.Insert, model, undefined) as Promise<OldGuest>;
    }
    public getAll(): Promise<Array<OldGuest>> {
        return database.executeQuery(SqlEnum.Get, new OldGuest(), undefined) as Promise<Array<OldGuest>>;
    }
}
