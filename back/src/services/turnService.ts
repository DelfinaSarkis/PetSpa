import { TurnModel, UserModel } from "../config/data-source";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";
import { statusEnum } from "../interfaces/ITurn";


export const getTurnsService = async (): Promise<Turn[]>  => {
    const turns = await TurnModel.find({relations: ["User"]});
    return turns;
}

export const getTurnByIdService = async (id:number): Promise <Turn | null> => {
    const turns = await TurnModel.find({relations: ["User"]});
    const turn = turns.find((User)=> User.id === id);
    return turn || null;
}

export const createNewTurnService = async (date:Date, time: string, userId:number): Promise <Turn> =>{
    const newTurn: Turn = await TurnModel.create({date, time});
    newTurn.status = statusEnum.active;
    const user: User | null = await UserModel.findOneBy({id: userId});
    newTurn.User = user;

    await TurnModel.save(newTurn);

    return newTurn;
};

export const cancelTurnService = async (id:number): Promise<void> => {
    const turn: Turn | null = await TurnModel.findOneBy({id});
    if(turn){
        turn.status = statusEnum.cancelled;
        await TurnModel.save(turn);
    } else {
        throw new Error(`Turno con id ${id} no encontrado`);
    }
};