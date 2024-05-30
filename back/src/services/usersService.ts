import { CredentialDto } from "../dto/credentialsDto";
import { UserDto } from "../dto/userDto";
import IUser from "../interfaces/IUsers";
import { createCredentialService } from "./credentialService";

let users: IUser[] = []

let id: number = 1;

export const getUserService = async (): Promise<IUser[]>  => {
    return users;
}

export const getUserByIdService = async (id: number): Promise<IUser | null> => {
    const user = users.find((user: IUser) => user.id === id);
    return user || null;
    }

export const createUserService = async (user: UserDto, credential: CredentialDto): Promise<IUser> => {
    const newCredentialId:number = await createCredentialService(credential.username, credential.password);
    const newUser: IUser = {
        id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        credentialsId: newCredentialId
    }
    users.push(newUser)
    id++

    return newUser;
}