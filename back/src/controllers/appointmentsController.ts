import { Request, Response } from "express";
import { cancelTurnService, createNewTurnService, getTurnByIdService, getTurnsService } from "../services/turnService";


export async function getTurnsController(req:Request, res:Response) {
    try{
        const turns = await getTurnsService();
        res.status(200).json(turns);
    } catch (error){
        console.error('Error:', error);
        res.status(500).json({error:'Error al obtener turnos'});
    }
};

export async function getTurnByIdController(req:Request, res:Response) {
    try{
        const id = (Number(req.params.id));
        const turn = await getTurnByIdService(id);
        if(turn){
            res.status(200).json(turn);
        } else{
            res.status(404).json({error: 'Turno no encontrado'});
        }
    } catch (error){
        console.error('Error:', error);
        res.status(500).json({error:'Error al obtener turno'});
    }
};

export async function createNewTurnController(req:Request, res:Response) {
    try{
        const {date, time, userId} = req.body;
        if(!userId){
            res.status(400).json({error: 'No se encuentra el usuario para asignarle el turno'});
            return;
        }
        const newTurn = await createNewTurnService(date, time, userId);
        res.status(200).json(newTurn);
    } catch(error){
        console.error('Error:', error);
        res.status(500).json({error:'Error al crear turno'});
    }
};

export async function cancelTurnController(req:Request, res:Response) {
    try{
        const {id} = req.body;
        await cancelTurnService(id)
        res.status(200).json("Turno cancelado con exito");
    } catch(error){
        console.error('Error:', error);
        res.status(500).json({error:'Error al cancelar el turno'});
    }
};