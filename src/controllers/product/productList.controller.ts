import { IPoduct } from './../../interfaces/product/index';
import { Request, Response } from "express";
import productListService from '../../services/products/productList.service';

const productListController = async (req: Request, res: Response) => {
    const productList: IPoduct[] = await productListService()

    return res.json(productList)
}

export default productListController