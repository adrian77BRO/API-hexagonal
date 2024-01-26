import { ProductResponse, Product } from "../entities";

export function getProductByIdDto(product: Product): ProductResponse {
    return {
        title: product.title || "",
        description: product.description || "",
        stock: product.stock || 0,
        price: product.price || 0,
    };
}