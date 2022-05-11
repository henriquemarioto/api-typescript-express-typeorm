import { Product } from '../../entities/product.entity';
import { AppDataSource } from './../../data-source';

const productListService = async () => {
    const productRepository = AppDataSource.getRepository(Product)
    const productList = await productRepository.find()

    return productList
}

export default productListService