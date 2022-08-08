import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from 'src/dtos/product.dto';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async getProducts(): Promise<Product[]> {
        const Products = await this.productModel.find(); 
        return Products;              
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
