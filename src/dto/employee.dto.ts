import { IsNotEmpty, Length } from "class-validator";

export class EmployeeDto {
    @IsNotEmpty({ message: 'There should be Employee Name'})
    @Length(2, 50)
    Emp_Name: string;

    @IsNotEmpty({ message: 'An employee should have AGE'})
    @Length(2)
    Emp_Age: number;
}