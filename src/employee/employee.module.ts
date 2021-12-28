import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Module({
    imports: [TypeOrmModule.forFeature([Employee]), ClientsModule.register([
        {
          name: 'EMPLOYEE_SERVICE',
          transport: Transport.RMQ,
          options: {
            urls: ['amqps://xmlevzfj:IWc6NnnAH8gvpzCJJh_I4iGFfuewBoZt@fox.rmq.cloudamqp.com/xmlevzfj'],
            queue: 'main_queue',
            queueOptions: {
              durable: false
            },
          },
        },
      ])
    ],
    controllers: [EmployeeController],
    providers: [EmployeeService]
})
export class EmployeeModule {}
