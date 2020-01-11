import {Test, TestingModule} from '@nestjs/testing';
import {TableService} from './table.controller';

describe('Table Controller', () => {
    let controller: TableService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TableService],
        }).compile();

        controller = module.get<TableService>(TableService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
