import z from "zod";
import { Product } from "../entities";

const productSchema = z.object({
    idProduct: z.number({
        invalid_type_error: "idProduct must be a number",
    })
        .optional(),
    title: z.string({
        invalid_type_error: "title must be a string",
        required_error: "title is required",
    }),
    description: z.string({
        invalid_type_error: "description must be a string",
        required_error: "description is required",
    }),
    stock: z.number({
        invalid_type_error: "stock must be a number",
        required_error: "stock is required",
    }),
    price: z.number({
        invalid_type_error: "price must be a number",
        required_error: "price is required",
    })
});

export const validateProduct = (product: Product) => {
    return productSchema.safeParse(product);
};

export const validatePartialProduct = (product: Product) => {
    return productSchema.partial().safeParse(product);
};