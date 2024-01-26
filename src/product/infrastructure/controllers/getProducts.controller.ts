import { Request, Response } from "express";
import { GetProductsService } from "../../applicationServices";

export class GetProductsController {
    constructor(private readonly getProductsService: GetProductsService) { }
    async run(req: Request, res: Response) {
        try {
            const result = await this.getProductsService.run();
            res.status(200).send(result);
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}