import { IsEmail, IsString } from 'class-validator';

export class CreateCustomerDTO {
    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;
}