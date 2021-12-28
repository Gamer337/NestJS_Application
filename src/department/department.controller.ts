import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DepartmentDto } from 'src/dto/department.dto';
import { Department } from './department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
    constructor(private depService: DepartmentService){}

    @Get()
    index(): Promise<Department[]> {
      return this.depService.findAll();
    }

    // @Post('create')
    // async create(@Body() depData: Department): Promise<any> {
    //   return this.depService.create(depData);
    // }

    @Post('create')
    @UsePipes(ValidationPipe)
    async create(@Body() depData: Department): Promise<any> {
      return this.depService.create(depData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id: number): Promise<any> {
      return this.depService.delete(id);
    }
}
