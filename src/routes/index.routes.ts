import { cartRoutes } from './cart.routes';
import { productRoutes } from './products.routes';
import { userRoutes } from './users.routes';
import { Express } from "express"
import { buyRoutes } from './buy.routes';

export const appRoutes = (app: Express) => {
    app.use("/users", userRoutes())
    app.use("/products", productRoutes());
    app.use("/cart", cartRoutes())
    app.use("/buy", buyRoutes())
}