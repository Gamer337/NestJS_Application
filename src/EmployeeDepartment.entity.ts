import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Employee } from "./employee/employee.entity";
import { Department } from "./department/department.entity";
import { BaseEntity } from "baseEntity";

@Entity('employee_departments')
export class EmployeeDepartment extends BaseEntity{

    @Column({name: "emp_id", nullable: false})
    employeeid: number;

    @Column({name: "dep_id", nullable: false})
    departmentid: number;

    @ManyToOne(type => Employee, employee => employee.EmployeeDepartments, 
        {onDelete:"SET NULL",onUpdate:"RESTRICT"})
    @JoinColumn({name: "emp_id"})
        employee : Employee;

    @ManyToOne(type => Department, depart => depart.EmployeeDepartments, 
        {onDelete:"CASCADE",onUpdate:"RESTRICT"})
    @JoinColumn({name: "dep_id"})
        department : Department;  
}