import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateUserDTO } from 'src/dtos/user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    
    constructor(private userService: UserService){}

    @Get('/')
    async getUsers(@Res() res){
        const Users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            message: 'These are all users',
            Users
        });      
    }


    @Get('/:id')
    async getAUser(@Res() res, @Param('id') id: string){
        const User = await this.userService.getAUser(id);
        if(!User) throw new NotFoundException('User does not exist, try another id');
        return res.status(HttpStatus.OK).json({
            message: 'This is the user',
            User
        });      
    }

    @Post('/')
    async createUser(@Res() res, @Body() createCustomerDTO: CreateUserDTO){
        const createCustomer = await this.userService.createUser(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: 'User successfully created',
            createCustomer
        });
    }

    @Put('/:id')
    async updateUser(@Res() res, @Param('id') id: string, createCustomerDTO: CreateUserDTO){ 
        const updateUser = await this.userService.updateUser(id, createCustomerDTO);
        //validation of id
        if(!updateUser) throw new NotFoundException('User does not exist, try another id');
        return res.status(HttpStatus.OK).json({
            message: 'User upgraded successfully',
            updateUser
        });
    }

    @Delete('/:id')
    async deleteUser(@Res() res, @Param('id') id: string){
        const deleteUser = await this.userService.deleteUser(id);
        return res.status(HttpStatus.OK).json({
            message: 'User deleted successfully',
            deleteUser
        });
    }
}
