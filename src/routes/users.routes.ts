import {Router} from "express"

import { validateUserCreate } from "../middleware/validateUserCreate.middleware"
import { authUser } from "../middleware/authUser.middleware"

import { userCreateSchema } from "../middleware/validateUserCreate.middleware"

import userCreateController from "../controllers/users/userCreate.controller"
import userListController from "../controllers/users/userList.controller"
import userLoginController from "../controllers/users/userLogin.controller"
import userListOneController from "../controllers/users/userListOne.controller"
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller"
import userUpdatePasswordController from "../controllers/users/userUpdatePassword.controller"

const routes = Router()

export const userRoutes = () => {
    routes.post("/", validateUserCreate(userCreateSchema), userCreateController);
    routes.post("/login", userLoginController)
    routes.get("/me", authUser, userListOneController);
    routes.get("/", authUser, userListController)
    routes.delete("/me", authUser, userDeleteSelfController)
    routes.patch("/me/updatepassword", authUser, userUpdatePasswordController);

    return routes
}