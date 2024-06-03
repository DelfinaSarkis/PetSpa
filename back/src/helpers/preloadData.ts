import { AppDataSource} from "../config/data-source";
import { Credential } from "../entities/Credential";
import { preloadTurn } from "../interfaces/IPreloadTurns";
import { preloadUser } from "../interfaces/IPreloadUser";
import CredentialRepository from "../repositories/CredentialRepository";
import TurnRepository from "../repositories/TurnRepository";
import UserRepository from "../repositories/UserRepository";

export const  preloadUserData = async () => {
    await AppDataSource.manager.transaction(async(transactionalEntityManager) => {
        const users = await UserRepository.find();
        if (users.length) return console.log(("No se hizo la precarga de datos"));

        for await (const user of preloadUser){
            const newUser = await UserRepository.create(user);
            const newCredential = new Credential()
            newCredential.username = user.username;
            newCredential.password = user.password; 

            const savedCredential = await CredentialRepository.save(newCredential);
            newUser.Credential = savedCredential;

            await transactionalEntityManager.save(newUser);
        }
        console.log("Precarga de datos de usuarios realizada con éxito");
    })
}

export const preloadTurnData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();

        for (const turn of preloadTurn) {
            const newTurn = TurnRepository.create(turn);
            await queryRunner.manager.save(newTurn);

            const user = await UserRepository.findOneBy({ id: turn.userId });
            if (!user) throw new Error("Usuario inexistente");

            newTurn.User = user;
            await queryRunner.manager.save(newTurn);
        }

        await queryRunner.commitTransaction();
        console.log("Precarga de turnos realizada con éxito");
    } catch (error) {
        console.error("Error al intentar crear los turnos", error);
        await queryRunner.rollbackTransaction();
    } finally {
        console.log("Ha finalizado el intento de precarga");
        await queryRunner.release();
    }
}