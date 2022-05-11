import { fixedFloat } from './../../utils/index';
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import AppError from "../../errors/AppError";
import { IPoductCreate } from "../../interfaces/product";

const productCreateService = async ({
  name,
  description,
  price,
}: IPoductCreate) => {
  const productRepository = AppDataSource.getRepository(Product);

  const productAlreadyExists = await productRepository.findOne({
    where: { name },
  });

  if (productAlreadyExists) {
    throw new AppError(409, "Product already exists");
  }

  const product = new Product();
  product.name = name;
  product.description = description;
  product.price = fixedFloat(price);

  productRepository.create(product);
  productRepository.save(product);

  return product;
};

export default productCreateService;
