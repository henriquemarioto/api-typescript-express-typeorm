import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  const { name, email, password } = req.newUser;

  const newUser = await userCreateService({ name, email, password });

  return res.status(201).send(newUser);
};

export default userCreateController;
