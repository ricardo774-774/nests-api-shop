import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from "./modules/customer/customer.module";
import { ComentModule } from './modules/coment/coment.module';


@Module({
  imports: [
    // MongoDB Connection
    MongooseModule.forRoot('mongodb+srv://ricardo:1234@cluster0.5hasu.mongodb.net/?retryWrites=true&w=majority'),
    // Modules
    CustomerModule,
    ComentModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
