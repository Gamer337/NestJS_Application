import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeDepartmentService } from './employee-department.service';
import { CreateEmployeeDepartmentDto } from './dto/create-employee-department.dto';
import { UpdateEmployeeDepartmentDto } from './dto/update-employee-department.dto';

@Controller('employee-department')
export class EmployeeDepartmentController {
  constructor(private readonly employeeDepartmentService: EmployeeDepartmentService) {}

  @Post()
  create(@Body() createEmployeeDepartmentDto: CreateEmployeeDepartmentDto) {
    return this.employeeDepartmentService.create(createEmployeeDepartmentDto);
  }

  @Get()
  findAll() {
    return this.employeeDepartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeDepartmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDepartmentDto: UpdateEmployeeDepartmentDto) {
    return this.employeeDepartmentService.update(+id, updateEmployeeDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeDepartmentService.remove(+id);
  }
}
