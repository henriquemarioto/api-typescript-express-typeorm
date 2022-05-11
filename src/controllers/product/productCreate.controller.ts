import { IPoduct } from './../../interfaces/product/index';
import { Request, Response } from "express";
import productCreateService from '../../services/products/productCreate.service';

const productCreateController = async (req: Request, res: Response) => {
    const data = req.body
    const product: IPoduct = await productCreateService(data)

    return res.status(201).json(product)
}

export default productCreateController