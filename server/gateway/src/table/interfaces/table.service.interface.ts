import {Observable} from "rxjs";
import {ITableFindAllParams} from "./table.findAll.params.interface";
import {ITableFindByIdParams} from "./table.findById.params.interface";
import {ITable} from "./table.interface";
import {ITableList} from "./table.list.interface";

export interface ITableService {
    findAll(data: ITableFindAllParams): Observable<ITableList>

    findById(data: ITableFindByIdParams): Observable<ITable>
}
