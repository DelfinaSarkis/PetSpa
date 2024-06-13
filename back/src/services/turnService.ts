import { AppDataSource} from "../config/data-source";
import { TurnDto } from "../dto/turnDto";
import { Turn } from "../entities/Turn";
import { statusEnum } from "../interfaces/ITurn";
import TurnRepository from "../repositories/TurnRepository";
import UserRepository from "../repositories/UserRepository";


export const getTurnsService = async (): Promise<Turn[]>  => {
    const turns = await TurnRepository.find({relations: ["User"]});
    return turns;
}

export const getTurnByIdService = async (id:number): Promise <Turn | null> => {
    const turns = await TurnRepository.find({relations: ["User"]});
    const turn = turns.find((User)=> User.id === id);
    return turn || null;
}

export const createNewTurnService = async (turn: TurnDto): Promise <Turn | void> =>{
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try{
        queryRunner.startTransaction()

    const newTurn = await TurnRepository.create(turn)
    await queryRunner.manager.save(newTurn)
    
    const user = await UserRepository.findById(turn.userId)

    newTurn.User = user;
    
    await queryRunner.manager.save(newTurn);

    await queryRunner.commitTransaction();

    return newTurn
    } catch(error){
        await queryRunner.rollbackTransaction()
        throw Error("Usuario inexistente")
    } finally{
        await queryRunner.release()
    }

    // const newTurn: Turn = await TurnModel.create({date, time});
    // newTurn.status = statusEnum.active;
    // const user: User | null = await UserModel.findOneBy({id: userId});
    // newTurn.User = user;

    // await TurnModel.save(newTurn);

    // return newTurn;
};

export const cancelTurnService = async (id:number): Promise<void> => {
    const turn: Turn | null = await TurnRepository.findOne({where: {id: id}});
    if(turn){
        turn.status = statusEnum.cancelled;
        await TurnRepository.save(turn);
    } else {
        throw new Error(`Turno con id ${id} no encontrado`);
    }
};