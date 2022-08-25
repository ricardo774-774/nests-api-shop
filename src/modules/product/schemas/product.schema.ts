import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";
import { Schema as _Schema } from "mongoose";

@Schema()
export class Product extends Document{
    @Prop({type: _Schema.Types.ObjectId, ref: 'User'})
    userId: string;

    @Prop({type: String, required:true})
    name: string;

    @Prop({type: Number, required:true})
    price: number;

    @Prop({type: Date, required:false, default: Date.now})
    createdDay: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);