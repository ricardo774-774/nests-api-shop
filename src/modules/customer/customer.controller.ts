import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/dtos/customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    
    constructor(private customerService: CustomerService){}

    @Get('/')
    async getCustomers(@Res() res){
        let Customers = await this.customerService.getCustomers();
        return res.status(HttpStatus.OK).json({
            message: 'These are all customers',
            Customers
        });      
    }


    @Get('/:id')
    async getACustomer(@Res() res, @Param('id') id: string){
        let Customer = await this.customerService.getACustomer(id);
        return res.status(HttpStatus.OK).json({
            message: 'This is the customer',
            Customer
        });      
    }

    @Post('/')
    async createCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO){
        const createCustomer = await this.customerService.createCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Customer successfully created',
            createCustomer
        });
    }

    @Put('/:id')
    async updateCustomer(@Res() res, @Param('id') id: string, createCustomerDTO: CreateCustomerDTO){
        let updateCustomer = await this.customerService.updateCustomer(id, createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Customer upgraded successfully',
            updateCustomer
        });
    }

    @Delete('/:id')
    async deleteCustomer(@Res() res, @Param('id') id: string){
        let deleteCustomer = await this.customerService.deleteCustomer(id);
        return res.status(HttpStatus.OK).json({
            message: 'Customer deleted successfully',
            deleteCustomer
        });
    }
}
