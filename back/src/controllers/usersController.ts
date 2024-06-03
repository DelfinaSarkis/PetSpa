import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUserService } from "../services/usersService";
import { User } from "../entities/User";
import { loginCredentialService } from "../services/credentialService";

export async function getUsersController(req:Request, res:Response) {
    try{
        const users: User[] = await getUserService();
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

export async function userLogin(req:Request, res:Response){
    try{
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({error:"Completa todos los campos por favor"})
        }
        const credential = await loginCredentialService(username, password);
        if (credential){
            res.status(200).json(credential);
        } else{
            return res.status(400).json({error: 'Credenciales incorrectas'})
        }
    }
    catch(error){
        console.log('Error:', error);
        res.status(500).json({error: 'Error al intentar iniciar sesión'})
    } 
};