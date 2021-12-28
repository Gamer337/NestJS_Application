import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDepartmentDto } from './create-employee-department.dto';

export class UpdateEmployeeDepartmentDto extends PartialType(CreateEmployeeDepartmentDto) {}
