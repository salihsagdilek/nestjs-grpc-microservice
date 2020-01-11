import {Controller, OnModuleInit, Get, Param} from '@nestjs/common';
import {Client, ClientGrpc} from "@nestjs/microservices";
import {grpcTableServiceOptions} from "./config/table.service";
import {Observable} from "rxjs";
import {ITable} from "./interfaces/table.interface";
import {ITableList} from "./interfaces/table.list.interface";
import {ITableService} from "./interfaces/table.service.interface";

@Controller('table')
export class TableController implements OnModuleInit {
    @Client(grpcTableServiceOptions)
    private tableMicroService: ClientGrpc;

    private tableService: ITableService;

    onModuleInit(): void {
        this.tableService = this.tableMicroService.getService<ITableService>('TableService')
    }

    @Get()
    getTable(): Observable<ITableList> {
        return this.tableService.findAll({})
    }

    @Get(':id')
    findTable(@Param('id') id): Observable<ITable> {
        return this.tableService.findById({id})
    }
}
