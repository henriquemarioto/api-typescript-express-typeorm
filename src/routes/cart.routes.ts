import { Router } from "express";
import { authUser } from './../middleware/authUser.middleware';
import cartAddProdController from '../controllers/cart/cartAddProd.controller';
import cartDelProdController from '../controllers/cart/cartDelProd.controller';

const routes = Router();

export const cartRoutes = () => {
  routes.post("/", authUser, cartAddProdController)
  routes.delete("/:product_id", authUser, cartDelProdController)

  return routes;
};
