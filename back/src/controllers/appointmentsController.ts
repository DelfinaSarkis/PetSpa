import { Request, Response } from "express";
import { cancelTurnService, createNewTurnService, getTurnByIdService, getTurnsService } from "../services/turnService";
import { statusEnum } from "../interfaces/ITurn";
import { TurnDto } from "../dto/turnDto";


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
    const {date, time, userId} = req.body;
    try{
        if(!userId){
            res.status(400).json({error: 'No se encuentra el usuario para asignarle el turno'});
            return;
        }
        const newTurnData: TurnDto = {
            date: new Date(date),
            time: time,
            userId: userId,
            status: statusEnum.active
        };
        const newTurn = await createNewTurnService(newTurnData);
        res.status(201).json(newTurn);
    } catch(error){
        console.error('Error:', error);
        res.status(400).json({error:'Error al crear turno'});
    }
};

export async function cancelTurnController(req:Request, res:Response) {
    try{
        const { id } = req.params;
        console.log(id)
        await cancelTurnService(Number(id))
        res.status(200).json("Turno cancelado con éxito");
    } catch(error){
        console.error('Error:', error);
        res.status(500).json({error:'Error al cancelar el turno'});
    }
};