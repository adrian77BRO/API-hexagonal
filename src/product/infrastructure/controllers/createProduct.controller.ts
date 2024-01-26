import { Request, Response } from "express";
import { CreateProductService } from "../../applicationServices";

export class CreateProductController {
    constructor(private readonly createProductService: CreateProductService) { }
    async run(req: Request, res: Response) {
        try {
            const product = req.body;
            const result = await this.createProductService.run(product);
            res.status(201).send(result);
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}