import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateProductDTO } from 'src/modules/product/dtos/product.dto';
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
    
    constructor(private productService: ProductService){}
    
    @Get('/')
    async getProducts(@Res() res){
        const Products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            message: 'These are all product',
            Products
        });      
    }


    @Get('/:id')
    async getAProduct(@Res() res, @Param('id') id: string){
        const Product = await this.productService.getAProduct(id);
        if(!Product) throw new NotFoundException('Product does not exist, try another id');
        return res.status(HttpStatus.OK).json({
            message: 'This is the product',
            Product
        });      
    }

    @Post('/')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const createdProduct = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product successfully created',
            createdProduct
        });
    }

    @Put('/:id')
    async updateProduct(@Res() res, @Param('id') id: string, createProductDTO: CreateProductDTO){ 
        const UpdatedProduct = await this.productService.updateProduct(id, createProductDTO);
        //validation of id
        if(!UpdatedProduct) throw new NotFoundException('Product does not exist, try another id');
        return res.status(HttpStatus.OK).json({
            message: 'Product upgraded successfully',
            UpdatedProduct
        });
    }

    @Delete('/:id')
    async deleteProduct(@Res() res, @Param('id') id: string){
        const deletedProduct = await this.productService.deleteProduct(id);
        return res.status(HttpStatus.OK).json({
            message: 'Product deleted successfully',
            deletedProduct
        });
    }
}

