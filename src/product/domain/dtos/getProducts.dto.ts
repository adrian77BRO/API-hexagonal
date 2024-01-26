import { Product, ProductResponse } from "../entities";
import { getProductByIdDto } from "./getProductById.dto";

export function getProductsDto(products: Product[]): ProductResponse[] {
    const formatedProducts: ProductResponse[] = [];
    products.forEach((product) => {
        formatedProducts.push(getProductByIdDto(product));
    });
    return formatedProducts;
}