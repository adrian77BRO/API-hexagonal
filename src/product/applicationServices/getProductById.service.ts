import { getProductByIdDto } from "../domain/dtos";
import { ProductRepository } from "../domain/repository/productRepository";
import { ProductResponse } from "../domain/entities";

export class GetProductByIdService {
    constructor(private readonly productRepository: ProductRepository) { }
    async run(idProduct: number): Promise<ProductResponse> {
        try {
            const response = await this.productRepository.getProductById(idProduct);
            if (response) {
                console.log(response)
                const formatedResponse = getProductByIdDto(response);
                return formatedResponse;
            }
            return {} as ProductResponse;
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}