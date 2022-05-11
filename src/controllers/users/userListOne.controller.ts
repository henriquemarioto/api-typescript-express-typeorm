import { Request, Response } from "express";
import userListOneService from "../../services/users/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  const email = req.userEmail;

  const user = await userListOneService(email);

  return res.status(201).send(user);
};

export default userListOneController;
