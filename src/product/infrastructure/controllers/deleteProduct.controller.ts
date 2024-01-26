import { Request, Response } from "express";
import { DeleteProductService } from "../../applicationServices";

export class DeleteProductController {
    constructor(private deleteProductService: DeleteProductService) { }
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const parseId = parseInt(id);
            const handleError = await this.deleteProductService.run(parseId);
            if (handleError === true)
                return res.status(200).json("Delete successfully");
            return res.status(404).json("There was an error deleting the product");
        } catch (err: any) {
            return res.status(500).send(err.message);
        }
    }
}