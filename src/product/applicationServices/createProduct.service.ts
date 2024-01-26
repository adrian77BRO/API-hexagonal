import { Product, ProductResponse } from "../domain/entities";
import { ProductRepository } from "../domain/repository/productRepository";
import { validateProduct } from "../domain/validators/product.validator";

export class CreateProductService {
  constructor(private readonly productRepository: ProductRepository) { }
  async run(product: Product): Promise<ProductResponse> {
    try {
      const resultValidation = validateProduct(product);
      if (resultValidation.success) {
        const response = await this.productRepository.createProduct(
          resultValidation.data
        );
        return response;
      }
      throw new Error(resultValidation.error.message);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}