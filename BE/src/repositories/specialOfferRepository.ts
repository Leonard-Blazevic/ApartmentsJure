import database from '../database/database';
import { SqlEnum } from '../database/sqlEnum';
import SpecialOffer from '../models/SpecialOffer';
import { IRepository } from './iRepository';
import { IModel } from '../models/IModel';

export default class SpecialOfferRepository implements IRepository {
    public getItemById(id: number): Promise<SpecialOffer> {
        return database.executeQuery(SqlEnum.Get, new SpecialOffer(), id) as Promise<SpecialOffer>;
    }
    public updateItem(id: number, model: SpecialOffer): Promise<SpecialOffer> {
        return database.executeQuery(SqlEnum.Update, model, id) as Promise<SpecialOffer>;
    }
    public deleteItem(id: number): Promise<SpecialOffer> {
        return database.executeQuery(SqlEnum.Delete, new SpecialOffer(), id) as Promise<SpecialOffer>;
    }
    public createItem(model: SpecialOffer): Promise<SpecialOffer> {
        return database.executeQuery(SqlEnum.Insert, model, undefined) as Promise<SpecialOffer>;
    }
    public getAll(): Promise<Array<SpecialOffer>> {
        return database.executeQuery(SqlEnum.Get, new SpecialOffer(), undefined) as Promise<Array<SpecialOffer>>;
    }
}

