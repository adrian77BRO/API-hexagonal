import { Product, ProductResponse } from "../domain/entities";
import { ProductRepository } from "../domain/repository/productRepository";
import { validatePartialProduct } from "../domain/validators/product.validator";

export class PutProductService {
    constructor(private readonly productRepository: ProductRepository) { }
    async run(product: Product, idProduct: number): Promise<ProductResponse> {
        try {
            const resultValidation = validatePartialProduct(product);
            if (!resultValidation.success)
                throw new Error(resultValidation.error.message);
            const originalProduct = this.productRepository.getProductById(idProduct);
            if (!(product.description && product.title && product.stock && product.price && originalProduct))
                throw new Error("Task not found");
            return await this.productRepository.updateProduct(idProduct, product);
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}