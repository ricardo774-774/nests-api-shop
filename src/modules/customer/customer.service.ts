import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDTO } from 'src/dtos/customer.dto';
import { Customer } from 'src/schemas/customer.schema';

@Injectable()
export class CustomerService {

    constructor(@InjectModel('Product') private readonly customerModel: Model<Customer>){}

    async getCustomers(): Promise<Customer[]> {
        const Customers = await this.customerModel.find(); 
        return Customers;              
    }

    async getACustomer(customerId: string): Promise<Customer> {
        const Customer = await this.customerModel.findById(customerId); 
        return Customer;           
    }

    async createCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {          
        const CustomerSaved = new this.customerModel(createCustomerDTO); 
        return await CustomerSaved.save();
    }

    async updateCustomer(customerId: string, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const CustomerUpdated = await this.customerModel.findByIdAndUpdate(customerId, 
            createCustomerDTO, { new: true }); 
        return CustomerUpdated;           
    }

    async deleteCustomer(customerId: string): Promise<Customer> {
        const CustomerDeleted = await this.customerModel.findByIdAndDelete(customerId); 
        return CustomerDeleted;           
    }
}
