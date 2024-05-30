import { Router } from "express";
import { getUsersController, getUserByIdController, createUserController, postUsersLogin} from "../controllers/usersController";


const userRouter: Router = Router();

userRouter.get("/", getUsersController);
userRouter.get("/:id", getUserByIdController);
userRouter.post("/register", createUserController);
userRouter.post("/login", postUsersLogin);


export default userRouter;

