import { IsNotEmpty, Matches, IsNumber, IsPositive, IsString } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    userId: MongooseSchema.Types.ObjectId;
    
    @Matches(/^[A-z0-9_]+(?:\s[A-z0-9_]+)*$/, {
        message: 'Invalid name format, only letters and spaces'
    })
    @IsNotEmpty()
    name: string;

    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    price: number;
}