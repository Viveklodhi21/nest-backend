//new code
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    // const prodId = Math.random().toString();  no need now
    const newProduct = new this.productModel({
      title,
      description: desc,
      price,
    });
    const result = await newProduct.save();
    // this.products.push(newProduct);
    return result?._id;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  async getSingleProduct(productId: string) {
    // const product = this.findProduct(productId)[0];
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  async updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const updatedProduct = await this.findProduct(productId);

    if (title) {
      updatedProduct.title = title;
    }

    if (desc) {
      updatedProduct.description = desc;
    }

    if (price) {
      updatedProduct.price = price;
    }
    updatedProduct.save();
  }

  async deleteProduct(prodId: string) {
    const result = await this.productModel.deleteOne({ _id: prodId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find product');
    }
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      const product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException(`Could not find product`);
    }
    if (!product) {
      throw new NotFoundException(`ould not find product`);
    }
    return {
      ...product,
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }
}

// old  code

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Product } from './product.model';

// @Injectable()
// export class ProductsService {
//   private products: Product[] = [];
//   insertProduct(title: string, desc: string, price: number) {
//     const prodId = Math.random().toString();
//     const newProduct = new Product(prodId, title, desc, price);
//     this.products.push(newProduct);
//     return prodId;
//   }

//   getProducts() {
//     return [...this.products];
//   }

//   getSingleProduct(productId: string) {
//     const product = this.findProduct(productId)[0];
//     return { ...product };
//   }

//   updateProduct(productId: string, title: string, desc: string, price: number) {
//     const [product, index] = this.findProduct(productId);
//     const updatedProduct = { ...product };

//     if (title) {
//       updatedProduct.title = title;
//     }

//     if (desc) {
//       updatedProduct.description = desc;
//     }

//     if (price) {
//       updatedProduct.price = price;
//     }
//     this.products[index] = updatedProduct;
//   }

//   deleteProduct(prodId: string) {
//     const index = this.findProduct(prodId)[1];
//     this.products.splice(index, 1);
//   }

//   private findProduct(id: string): [Product, number] {
//     const productIndex = this.products.findIndex((prod) => prod.id === id);
//     const product = this.products[productIndex];
//     if (!product) {
//       throw new NotFoundException(`Product ${id} not found`);
//     }
//     return [product, productIndex];
//   }
// }
