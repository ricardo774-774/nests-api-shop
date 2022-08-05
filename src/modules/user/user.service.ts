import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async getUsers(): Promise<User[]> {
        const Users = await this.userModel.find(); 
        return Users;              
    }

    async getAUser(userId: string): Promise<User> {
        const User = await this.userModel.findById(userId); 
        return User;           
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {          
        const UserSaved = new this.userModel(createUserDTO); 
        return await UserSaved.save();
    }

    async updateUser(userId: string, createUserDTO: CreateUserDTO): Promise<User> {
        const UserUpdated = await this.userModel.findByIdAndUpdate(userId, 
            createUserDTO, { new: true }); 
        return UserUpdated;           
    }

    async deleteUser(userId: string): Promise<User> {
        const UserDeleted = await this.userModel.findByIdAndDelete(userId); 
        return UserDeleted;           
    }
}
