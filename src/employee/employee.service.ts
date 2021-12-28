import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Department } from "src/department/department.entity";
import { Repository, UpdateResult, DeleteResult, FindConditions, ObjectID } from "typeorm";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>){}

    async  findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    async findOneById(id: number) : Promise<Employee> {
        try {
            const user = await this.employeeRepository.findOneOrFail(id);
            return user;
        } catch (err) {
            //handle error
            throw err;
        }
    }

    async  create(Employee: Employee): Promise<Employee> {
        const newEmp = this.employeeRepository.create(Employee);
        //const newEmp = this.employeeRepository.create({Employee});
        return await this.employeeRepository.save(newEmp); // INSERT INTO EMPLOYEE
        
    }

    // async update(Employee: Employee): Promise<UpdateResult> {
    //     return await this.employeeRepository.update(Employee.Emp_id, Employee);
    // }

    async update(id: number, Employee: Employee): Promise<Employee> {
        const emp = await this.findOneById(id);
        emp.empname = Employee.empname;
        emp.empage = Employee.empage;
        return await this.employeeRepository.save(emp);
    }

    async delete(id: number): Promise<DeleteResult> {
        //const emp = await this.findOneById(id);
        return this.employeeRepository.delete(id);
    }


}