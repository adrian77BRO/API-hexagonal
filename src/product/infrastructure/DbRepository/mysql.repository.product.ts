import { db } from "../../../shared/application/mysqlConnection";
import { Product } from "../../domain/entities";
import { ProductRepository } from "../../domain/repository/productRepository";

export class MySQLRepositoryProduct implements ProductRepository {
    getProducts(): Promise<Product[]> {
        const query = "SELECT * FROM products";
        return db.execute(query).then((res: any) => {
            return res[0] as Product[];
        });
    }

    getProductById(idProduct: number): Promise<Product> {
        const query = "SELECT * FROM products WHERE idProduct = ?";
        return db
            .execute(query, [idProduct])
            .then((res: any) => {
                console.log(res);
                return res[0][0] as Product;
            })
            .catch((err: any) => {
                throw new Error(err);
            });
    }
    createProduct(product: Product): Promise<Product> {
        const { title, description, stock, price } = product;
        const query = `INSERT INTO products (title, description, stock, price) VALUES (?,?,?,?)`;
        return db
            .execute(query, [title, description, stock, price])
            .then(() => {
                return product;
            })
            .catch((err: any) => {
                throw new Error(err);
            });
    }
    deleteProduct(idProduct: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateProduct(idProduct: number, product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
}