import { Injectable } from '@nestjs/common';
import { CreateEmployeeDepartmentDto } from './dto/create-employee-department.dto';
import { UpdateEmployeeDepartmentDto } from './dto/update-employee-department.dto';

@Injectable()
export class EmployeeDepartmentService {
  create(createEmployeeDepartmentDto: CreateEmployeeDepartmentDto) {
    return 'This action adds a new employeeDepartment';
  }

  findAll() {
    return `This action returns all employeeDepartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeDepartment`;
  }

  update(id: number, updateEmployeeDepartmentDto: UpdateEmployeeDepartmentDto) {
    return `This action updates a #${id} employeeDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeDepartment`;
  }
}
