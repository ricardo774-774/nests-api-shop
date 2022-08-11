import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from "mongoose";

@Schema()
export class Product extends Document{
    @Prop({type: [Types.ObjectId], ref: 'User'})
    userId: string;

    @Prop({type: String, required:true})
    name: string;

    @Prop({type: Number, required:true})
    price: number;

    @Prop({type: Date, required:false, default: Date.now})
    createdDay: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);