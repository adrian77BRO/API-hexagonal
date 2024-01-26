import { productsLocalData } from "../../shared/domain";
import { LocalDataRepository } from "./DbRepository/localData.repository";
import { MySQLRepositoryProduct } from "./DbRepository/mysql.repository.product";

import {
    GetProductsService,
    GetProductByIdService,
    CreateProductService,
    DeleteProductService,
    PutProductService,
} from "../applicationServices";
import {
    CreateProductController,
    DeleteProductController,
    GetProductByIdController,
    GetProductsController,
    PutProductController,
} from "./controllers";

const localDataRepository = new LocalDataRepository(productsLocalData);
const mysqlRepository = new MySQLRepositoryProduct();

const getProductsService = new GetProductsService(mysqlRepository);
const getProductByIdService = new GetProductByIdService(mysqlRepository);
const createProductService = new CreateProductService(mysqlRepository);
const deleteProductService = new DeleteProductService(localDataRepository);
const putProductService = new PutProductService(localDataRepository);

export const getProductsController = new GetProductsController(getProductsService);
export const getProductByIdController = new GetProductByIdController(
    getProductByIdService
);
export const createProductController = new CreateProductController(createProductService);
export const deleteProductController = new DeleteProductController(
    deleteProductService
);
export const putProductController = new PutProductController(putProductService)