import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentService {
    constructor(@InjectRepository(Department) private departmentRepository : Repository<Department>){}

    async findAll(): Promise<Department[]> {
        return await this.departmentRepository.find({
            relations: ['employee']
        });
    }

    async create(Department: Department): Promise<Department> {
        return await this.departmentRepository.save(Department);
    }

    async delete(id: number): Promise<DeleteResult> {
        //const emp = await this.findOneById(id);
        return this.departmentRepository.delete(id);
    }
}
