import { Controller, Get, Inject } from "@nestjs/common";
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";

@Controller('employee')
export class EmployeeController {
    constructor(
      private employeeService: EmployeeService,
      @Inject('EMPLOYEE_SERVICE') private readonly client: ClientProxy
      ){}

    @Get()
    async index() {
      this.client.emit('hello', 'Hello from RabbitMQ');
      return this.employeeService.findAll();
    }

    @Post('create')
    async create(@Body() employeeData: Employee): Promise<any> {
      return this.employeeService.create(employeeData);
    }

    @Put(':id/update')
    async update(@Param('id') id: number, @Body() employeeData: Employee): Promise<any> {
        employeeData.id = Number(id);
        console.log('Update #' + employeeData.id)
        return this.employeeService.update(employeeData.id, employeeData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id: number): Promise<any> {
      return this.employeeService.delete(id);
    }
}