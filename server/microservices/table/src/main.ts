import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.GRPC,
        options: {
            url: '0.0.0.0:50051',
            protoPath: '/proto/table.proto',
            package: 'table'
        }
    });
    await app.listen(() => {
        console.log('Table microservice is listening')
    });
}

bootstrap();
