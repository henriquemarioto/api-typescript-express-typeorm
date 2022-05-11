import { authUser } from './../middleware/authUser.middleware';
import { Router } from "express";
import buyCreateController from '../controllers/buy/buyCreate.controller';

const routes = Router()

export const buyRoutes = () => {
    routes.post("/", authUser, buyCreateController)

    return routes
}