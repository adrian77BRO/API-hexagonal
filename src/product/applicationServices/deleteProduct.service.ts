import { ProductRepository } from "../domain/repository/productRepository";

export class DeleteProductService {
  constructor(private productRepository: ProductRepository) {}
  async run(idProduct: number) : Promise<boolean> {
    try {
      const findProduct = await this.productRepository.getProductById(idProduct);
      if (findProduct) {
        await this.productRepository.deleteProduct(idProduct);
        return true;
      }
      return false;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}