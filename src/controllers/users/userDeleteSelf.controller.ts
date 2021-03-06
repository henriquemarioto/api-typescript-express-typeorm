import { Request, Response } from "express";
import userDeleteSelfService from "../../services/users/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  const email = req.userEmail;

  const user = await userDeleteSelfService(email);

  return res.status(200).json({ message: "User deleted with success!" });
};

export default userDeleteSelfController;
