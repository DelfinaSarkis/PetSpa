import { Router } from "express";
import { getTurnsController, getTurnByIdController, createNewTurnController, cancelTurnController } from "../controllers/appointmentsController";

const appointementRouter: Router = Router();

appointementRouter.get("/", getTurnsController);
appointementRouter.get("/:id", getTurnByIdController);
appointementRouter.post("/schedule", createNewTurnController);
appointementRouter.put("/cancel", cancelTurnController);

export default appointementRouter;