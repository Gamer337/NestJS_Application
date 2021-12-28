import { Module } from '@nestjs/common';
import { EmployeeDepartmentService } from './employee-department.service';
import { EmployeeDepartmentController } from './employee-department.controller';

@Module({
  controllers: [EmployeeDepartmentController],
  providers: [EmployeeDepartmentService]
})
export class EmployeeDepartmentModule {}
