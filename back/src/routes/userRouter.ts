import { Router } from "express";
import { getUsersId, getUsersList, postUsersLogin, postUsersRegister } from "../controllers/usersController";


const userRouter: Router = Router();

userRouter.get("/", getUsersList);
userRouter.get("/:id", getUsersId);
userRouter.post("/register", postUsersRegister);
userRouter.post("/login", postUsersLogin);


export default userRouter;

