import { Router } from "express";
import { getUsersController, getUserByIdController, createUserController, userLogin} from "../controllers/usersController";


const userRouter: Router = Router();

userRouter.get("/", getUsersController);
userRouter.get("/:id", getUserByIdController);
userRouter.post("/register", createUserController);
userRouter.post("/login", userLogin);


export default userRouter;

