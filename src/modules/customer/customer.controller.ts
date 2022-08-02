import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/dtos/customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    
    constructor(private customerService: CustomerService){}

    @Get('/')
    getCustomers(@Res() res){

    }

    @Get('/:id')
    getACustomer(@Res() res, @Param('id') id: string){

    }

    @Post('/')
    createCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO){
        
    }

    @Put('/:id')
    updateCustomer(@Res() res, @Param('id') id: string, createCustomerDTO: CreateCustomerDTO){
        
    }

    @Delete('/:id')
    deleteCustomer(@Res() res, @Param('id') id: string){
        
    }
}
