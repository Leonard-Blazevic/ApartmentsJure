import * as mysql from 'mysql';
import { SqlEnum } from './sqlEnum';
import { IModel } from '../models/IModel';
const config: any = require('../../config.json');

export class Database {
    public db: any;

    constructor() {
        this.db = mysql.createConnection({
            database: config.dbConfig.database,
            host: config.dbConfig.host,
            password: config.dbConfig.password,
            user: config.dbConfig.user,
        });
    }

    public connectToDb(): void {
        this.db.connect((err: Error) => {
            if (err) {
                throw err;
            }
            console.log('Successfully connected to the database!');
        });
    }

    public executeQuery(queryType: SqlEnum, model: IModel, id: number): Promise<any> {
        let sql: String = this.sqlBuilder(queryType, model, id);
        return new Promise((resolve: any, reject: any) => {
            this.db.query(sql, function (error: Error, results: any, fields: any): any {
                if (error) {
                    reject(error);
                }
                resolve(results);
            });
        });
    }

    private sqlBuilder(queryType: SqlEnum, model: IModel, id: number): String {
        let sqlString: String = '';
        switch (queryType) {
            case SqlEnum.Get: {
                if (id) {
                    return `SELECT * FROM apartmentsjuredb.${model.constructor.name} WHERE id = ${id}`;
                }

                return `SELECT * FROM apartmentsjuredb.${model.constructor.name}`;
            }
            case SqlEnum.Delete: {
                return `DELETE FROM apartmentsjuredb.${model.constructor.name} WHERE id = ${id}`;
            }
            case SqlEnum.Update: {
                let keys: any = Object.keys(model);
                sqlString = `UPDATE apartmentsjuredb.${model.constructor.name} SET `;

                keys.forEach((element: string, index: number, array: string[]) => {
                    sqlString += element + `=` + `'` + model[element] + `'`;
                    if (index < array.length - 1) {
                        sqlString += `,`;
                    }
                });
                sqlString += ` WHERE id = '${id}'`;

                return sqlString;
            }
            case SqlEnum.Insert: {
                let keys: any = Object.keys(model);
                sqlString = `INSERT INTO apartmentsjuredb.${model.constructor.name} (`;

                keys.forEach((element: string, index: number, array: string[]) => {
                    sqlString += element;
                    if (index < array.length - 1) {
                        sqlString += `,`;
                    }
                });
                sqlString += `) VALUES (`;
                keys.forEach((element: string, index: number, array: string[]) => {
                    sqlString += `'` + model[element] + `'`;
                    if (index < array.length - 1) {
                        sqlString += `,`;
                    }
                });
                sqlString += `)`;

                return sqlString;
            }
            default: {
                throw new Error('Unknown sql query');
            }
        }
    }
}

const database: Database = new Database();
export default database;
