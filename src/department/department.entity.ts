import { Employee } from "src/employee/employee.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "baseEntity";
import { EmployeeDepartment } from "src/EmployeeDepartment.entity";

@Entity()
export class Department extends BaseEntity{

    @Column({ type: 'text' , nullable: false, default: null})
    depname: string;

    @OneToMany(type => EmployeeDepartment, employee_department => employee_department.department)
    EmployeeDepartments : EmployeeDepartment[]

    @OneToOne(() => Employee, emp => emp.departmnt)
    employee: Employee
}