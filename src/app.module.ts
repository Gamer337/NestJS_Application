import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'orm.config';
import { SwaggerModule } from '@nestjs/swagger';
import { EmployeeDepartmentModule } from './employee-department/employee-department.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [CatsModule, EmployeeModule, DepartmentModule, TypeOrmModule.forRoot(config), EmployeeDepartmentModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){
    // const document = SwaggerModule.createDocument(app, config);
   // SwaggerModule.setup('api', app, document);
  }
}
