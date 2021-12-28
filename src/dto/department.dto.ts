import { IsNotEmpty, Length } from "class-validator";

export class DepartmentDto {

    Dep_id: number;

    @IsNotEmpty({ message: 'There should be a department name'})
    @Length(2, 100)
    Dep_Name: string;
}