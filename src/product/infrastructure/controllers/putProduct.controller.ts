import { Request, Response } from "express";
import { PutProductService } from "../../applicationServices";

export class PutProductController {
    constructor(private readonly putProductService: PutProductService) { }
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const parseId = parseInt(id);
            const product = req.body;
            const result = await this.putProductService.run(product, parseId);
            res.status(200).send(result);
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}