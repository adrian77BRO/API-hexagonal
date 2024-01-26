import { getProductsDto } from "../domain/dtos/getProducts.dto";
import { ProductResponse } from "../domain/entities";
import { ProductRepository } from "../domain/repository/productRepository";

export class GetProductsService {
    constructor(private readonly productRepository: ProductRepository) { }
    async run(): Promise<ProductResponse[]> {
        try {
            const response = await this.productRepository.getProducts();
            if (response) {
                const formatedResponse = getProductsDto(response);
                return formatedResponse;
            }
            return response;
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}