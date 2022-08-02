import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerSchema } from 'src/schemas/customer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Customer', schema: CustomerSchema}
    ])
  ],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
