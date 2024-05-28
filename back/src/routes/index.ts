import { Router } from "express";
import userRouter from "./userRouter";
import appointementRouter from "./appointmentRouter";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointementRouter);

export default router;