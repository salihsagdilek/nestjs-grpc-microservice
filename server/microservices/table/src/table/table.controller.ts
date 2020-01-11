import {Controller} from '@nestjs/common';
import {GrpcMethod} from "@nestjs/microservices";
import {tableData} from "./table.data";
import {ITableFindByIdParams} from "./interfaces/table.findById.params.interface";
import {ITableFindAllParams} from "./interfaces/table.findAll.params.interface";
import {ITableList} from "./interfaces/table.list.interface";
import {ITable} from "./interfaces/table.interface";

@Controller()
export class TableService {
    @GrpcMethod()
    findAll(data: ITableFindAllParams, metadata: any): ITableList {
        return {tables: tableData}
    }

    @GrpcMethod()
    findById(data: ITableFindByIdParams, metadata: any): ITable {
        return tableData.find(({productId}) => productId === data.id)
    }
}
