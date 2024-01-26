import { Product } from "../entities";

export interface ProductRepository {
    getProducts(): Promise<Product[]>;
    getProductById(idProduct: number): Promise<Product>;
    createProduct(product: Product): Promise<Product>;
    deleteProduct(idProduct: number): Promise<void>;
    updateProduct(idProduct: number, product: Product): Promise<Product>;
}