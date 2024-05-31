import { AppDataSource, CredentialModel, UserModel } from "../config/data-source";
import { CredentialDto } from "../dto/credentialsDto";
import { UserDto } from "../dto/userDto";
import { Credential } from "../entities/Credential";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { createCredentialService } from "./credentialService";


export const getUserService = async (): Promise<User[]> => {
    const users = await UserModel.find({relations: ["Turn"]});
    return users;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const users = await UserModel.find({relations: ["Turn"]});
    const user = users.find((Turn) => Turn.id === id);
    return user || null;
};

export const createUserService = async (users: UserDto, credential: CredentialDto) => {
    const newUser: User = await UserModel.create(users);
    const newCredential: Credential = await createCredentialService(credential.username, credential.password);
    newUser.Credential = newCredential;
    const result = await UserModel.save(newUser);
    
    return newUser;
}