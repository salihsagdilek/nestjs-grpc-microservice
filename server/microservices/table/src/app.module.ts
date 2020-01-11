import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {TableModule} from './table/table.module';

@Module({
    imports: [TableModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {
}
