import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, Matches } from 'class-validator';

export class CreateCustomerDTO {
    @MinLength(3)
    @MaxLength(20)
    @Matches(/^[A-z-0-9]+(?:[A-z0-9_]+)*$/, {
        message: 'Invalid name format, only letters and spaces'
    })
    @IsNotEmpty()
    name: string;

    @MinLength(3)
    @MaxLength(20)
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}