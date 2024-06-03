import { statusEnum } from "../interfaces/ITurn";

export interface TurnDto{
    date: Date,
    time: string,
    status: statusEnum,
    userId:number
}