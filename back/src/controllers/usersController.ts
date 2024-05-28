import { Request, Response } from "express";

export async function getUsersList(req:Request, res:Response) {
    res.status(200).send("Obtiene el listado de todos los usuarios");
}

export async function getUsersId(req:Request, res:Response) {
    res.status(200).send("Obtiene el detalle de un usuario específico");
}

export async function postUsersRegister(req:Request, res:Response) {
    res.status(200).send("Registro de un nuevo usuario");
}

export async function postUsersLogin(req:Request, res:Response) {
    res.status(200).send("Login del usuario a la aplicación");
}