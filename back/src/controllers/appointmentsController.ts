import { Request, Response } from "express";

export async function getAppointmentsList(req:Request, res:Response) {
    res.status(200).send("Obtiene el listado de todos los turnos de todos los usuarios");
}

export async function getAppointmentsTurn(req:Request, res:Response) {
    res.status(200).send("Obtiene un turno específico");
}

export async function postAppointmentsSchedule(req:Request, res:Response) {
    res.status(200).send("Agenda un nuevo turno");
}

export async function putAppointmentsCancel(req:Request, res:Response) {
    res.status(200).send('Cambia el estatus de un turno a "cancelled"');
}