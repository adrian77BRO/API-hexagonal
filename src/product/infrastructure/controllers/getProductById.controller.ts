import { Request, Response } from "express";
import { GetProductByIdService } from "../../applicationServices";

export class GetProductByIdController {
    constructor(private readonly getProductByIdService: GetProductByIdService) { }
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const parseId = parseInt(id);
            const result = await this.getProductByIdService.run(parseId);
            res.status(200).send(result);
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}