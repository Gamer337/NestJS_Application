import { Department } from "src/department/department.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "baseEntity";
import { EmployeeDepartment } from "src/EmployeeDepartment.entity";

@Entity()
export class Employee extends BaseEntity{

    @Column({ type: 'text' , nullable: false, default: null})
    empname: string;

    @Column({ type: 'text' , nullable: false, default: null})
    empage: number;

    @OneToOne(() => Department, depart => depart.employee, {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    departmnt: Department;

    @OneToMany(type => EmployeeDepartment, employee_department => employee_department.employee)
    EmployeeDepartments :  EmployeeDepartment[];

}
