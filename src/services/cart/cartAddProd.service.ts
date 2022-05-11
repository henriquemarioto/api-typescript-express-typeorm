import { fixedFloat } from "./../../utils/index";
import { Product } from "./../../entities/product.entity";
import { User } from "./../../entities/user.entity";
import { AppDataSource } from "./../../data-source";
import AppError from "../../errors/AppError";
import { Cart } from "../../entities/cart.entity";

const cartAddProdService = async (product_id: string, userEmail: string) => {
  const userRepository = AppDataSource.getRepository(User);

  
  const user = await userRepository.findOne({
    where: { email: userEmail },
  });
  
  if (!user) {
    throw new AppError(404, "User not found");
  }

  const cartRepository = AppDataSource.getRepository(Cart);

  const cart = await cartRepository.findOne({
    where: { id: user?.cart.id },
  });

  if(!product_id){
    throw new AppError(404, "Need product id on body")
  }

  const productRepository = AppDataSource.getRepository(Product);

  const productToAdd = await productRepository.findOne({
    where: { id: product_id },
  });

  if (!productToAdd) {
    throw new AppError(409, "Product not found");
  }

  if (cart && productToAdd) {
    if (
      cart.products.filter((prod) => prod.name === productToAdd.name).length > 0
    ) {
      throw new AppError(409, "Product is already in the cart");
    }

    cart.products = [...cart.products, productToAdd];
    cart.subtotal = fixedFloat(cart.subtotal + productToAdd.price);

    await cartRepository.save(cart);

    return cart;
  }
};

export default cartAddProdService;
