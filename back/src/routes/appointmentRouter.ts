import { Router } from "express";
import { getAppointmentsList, getAppointmentsTurn, postAppointmentsSchedule, putAppointmentsCancel } from "../controllers/appointmentsController";

const appointementRouter: Router = Router();

appointementRouter.get("/", getAppointmentsList);
appointementRouter.get("/:id", getAppointmentsTurn);
appointementRouter.post("/schedule", postAppointmentsSchedule);
appointementRouter.put("/cancel", putAppointmentsCancel);

export default appointementRouter;