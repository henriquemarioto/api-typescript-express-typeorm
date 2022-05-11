import { IUserCreate } from './../../src/interfaces/users/index';
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      userEmail: string;
      newUser: IUserCreate;
    }
  }
}
