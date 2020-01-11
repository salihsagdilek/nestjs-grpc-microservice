import {ClientOptions, Transport} from "@nestjs/microservices";

export const grpcTableServiceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: 'table.service:50051',
        package: 'table',
        protoPath: '/proto/table.proto'
    }
};
