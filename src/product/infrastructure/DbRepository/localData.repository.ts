import { Product } from "../../domain/entities";
import { ProductRepository } from "../../domain/repository/productRepository";

export class LocalDataRepository implements ProductRepository {
    private productsLocalData: Product[];
    constructor(productsLocalData: Product[]) {
        this.productsLocalData = productsLocalData;
    }
    async getProducts(): Promise<Product[]> {
        return this.productsLocalData;
    }
    async getProductById(idProduct: number): Promise<Product> {
        return this.productsLocalData.filter((product) => product.idProduct === idProduct)[0];
    }
    async createProduct(product: Product): Promise<Product> {
        const idProduct = this.productsLocalData.length;
        const newProduct = {
            ...product,
            idProduct,
        };
        this.productsLocalData.push(newProduct);
        return product;
    }
    async deleteProduct(idProduct: number): Promise<void> {
        this.productsLocalData.filter((product) => product.idProduct !== idProduct);
        return;
    }
    async updateProduct(idProduct: number, product: Product): Promise<Product> {
        this.productsLocalData.map((productMap) => {
            if (productMap.idProduct === idProduct) {
                productMap.description = product.description;
                productMap.title = product.title;
                productMap.stock = product.stock;
                productMap.price = product.price;
            }
        });
        return product;
    }
}