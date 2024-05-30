import { Request, Response } from "express";
import IUser from "../interfaces/IUsers";
import { createUserService, getUserByIdService, getUserService } from "../services/usersService";

export async function getUsersController(req:Request, res:Response) {
    try{
        const users: IUser[] = await getUserService();
        res.status(200).json(users);
    }
    catch(error){
        console.error('Error:', error);
        res.status(500).json({error: 'Error al obtener usuarios'});
    }
};

export async function getUserByIdController(req:Request, res:Response) {
    try{
        const id = (Number(req.params.id))
        const user = await getUserByIdService(id);
        if(user){
            res.status(200).json(user);
        } else{
            res.status(404).json({error:'Usuario no encontrado'});
        }
    }
    catch(error){
        console.error('Error:', error);
        res.status(400).json({error:'Error al obtener usuario'});
    }
};

export async function createUserController(req:Request, res:Response) {
    try{
        const {name, email, birthdate, nDni, username, password} = req.body;
        if(!name || !email || !birthdate || !nDni || !username || !password){
            res.status(400).json({error:"Completa todos los campos por favor"})
        }
        const newUser = await createUserService({name, email, birthdate, nDni},{username, password});
        res.status(201).json(newUser);
}
    catch(error){
        console.error('Error:', error);
        res.status(400).json({error: 'Error al crear usuario'})
    }    
};

export async function postUsersLogin(req:Request, res:Response){
    try{
        
    }
    catch{
        console.log(Error);
    } 
};