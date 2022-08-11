import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, Matches } from 'class-validator';

export class CreateUserDTO {
    @MinLength(3)
    @MaxLength(20)
    @Matches(/^[A-z_]+(?:[A-z_]+)*$/, {
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