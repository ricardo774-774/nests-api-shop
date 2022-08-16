import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateProductDTO } from 'src/modules/product/dtos/product.dto';
import { Product } from 'src/modules/product/schemas/product.schema';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    
    async getProducts(): Promise<Product[]> {
        return this.productModel.aggregate([
            {
                $project: {
                    userId: 1,
                    name: 1,
                    price: 1,
                    createdDay: 1,
                    _id: 1 
                }
            },
            {
                $sort: {
                    createdDay: -1,
                }
            },
            {
                $limit: 4
            },
        ]);
    }

   async getProductsUser(userId: string): Promise<Product[]> {
        return this.productModel.aggregate([
            {
                $match: {
                    userId: new Types.ObjectId(userId),
                },
            },
        ]);
    }

    async getAProduct(productId: string): Promise<Product> {
        const Product = await this.productModel.findById(productId); 
        return Product;           
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {          
        const ProductSaved = new this.productModel(createProductDTO); 
        return await ProductSaved.save();
    }

    async updateProduct(productId: string, createProductDTO: CreateProductDTO): Promise<Product> {
        const ProductUpdated = await this.productModel.findByIdAndUpdate(productId, 
            createProductDTO, { new: true }); 
        return ProductUpdated;  
    }

    async deleteProduct(productId: string): Promise<Product> {
        const ProductDeleted = await this.productModel.findByIdAndDelete(productId); 
        return ProductDeleted;           
    }
}
