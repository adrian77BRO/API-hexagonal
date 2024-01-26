import { Router } from "express";
import {
    getProductsController,
    getProductByIdController,
    createProductController,
    deleteProductController,
    putProductController,
} from "./dependencies.product";
import { verifyJwt } from "../../auth/application/middlewares/jwt.middleware";

const productRouter = Router();

productRouter
    .get("/", verifyJwt, getProductsController.run.bind(getProductsController))
    .get("/:id", verifyJwt, getProductByIdController.run.bind(getProductByIdController))
    .post("/", verifyJwt, createProductController.run.bind(createProductController))
    .delete("/:id", deleteProductController.run.bind(deleteProductController))
    .put("/:id", putProductController.run.bind(putProductController));

export default productRouter;