import { Request, Response } from "express";
import userListService from "../../services/users/userList.service";

const userListController = async (req: Request, res: Response) => {
  const users = await userListService();

  return res.send(users);
};

export default userListController;
