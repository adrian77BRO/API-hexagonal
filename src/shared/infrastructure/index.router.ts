import { Router, Request, Response } from "express";

import productRouter from "../../product/infrastructure/product.router";
import userRouter from "../../user/infrastructure/user.router";
import authRouter from "../../auth/infrastructure/auth.router";

const prefijo = "/api";
const indexRouter = Router();

indexRouter.use(`${prefijo}/products`, productRouter);
indexRouter.use(`${prefijo}/users`, userRouter);
indexRouter.use(`${prefijo}/auth`, authRouter)

indexRouter.get(prefijo, (req: Request, res: Response) => {
    res.status(200).send("Hola mundo");
});

export default indexRouter;