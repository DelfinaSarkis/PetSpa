import ITurn, { statusEnum } from "../interfaces/ITurn";

let turns: ITurn[] = []

let id: number = 1;

export const getTurnsService = async (): Promise<ITurn[]>  => {
    return turns;
}

export const getTurnById = async (id:number): Promise <ITurn | null> => {
    const turn = turns.find((turn: ITurn) => turn.id === id);
    return turn || null;
}

export const createNewTurn = async (date:Date, time: Date, userId:number) =>{
    if(!userId){
        throw new Error("No se proporncionó un ID de usuario")
    }
    const newTurn: ITurn ={
        id,
        date,
        time,
        userId,
        status: statusEnum.active
    };
    turns.push(newTurn);
    id++;
};

export const cancelTurn = async (id:number): Promise<void> => {
    const turn = turns.find((turn) => turn.id === id)
    if(turn){
        turn.status = statusEnum.cancelled;
    } else {
        throw new Error(`Turno con id ${id} no encontrado`);
    }
};


