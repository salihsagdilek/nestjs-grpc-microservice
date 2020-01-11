import {Module} from '@nestjs/common';
import {TableService} from './table.controller';

@Module({
    providers: [],
    controllers: [TableService],
})
export class TableModule {
}
