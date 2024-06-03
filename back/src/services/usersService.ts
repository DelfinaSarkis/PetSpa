import { CredentialDto } from "../dto/credentialsDto";
import { UserDto } from "../dto/userDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import { createCredentialService } from "./credentialService";


export const getUserService = async (): Promise<User[]> => {
    const users = await UserRepository.find({relations: ["Turn"]});
    return users;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const users = await UserRepository.find({relations: ["Turn"]});
    const user = users.find((Turn) => Turn.id === id);
    return user || null;
};

export const createUserService = async (users: UserDto, credential: CredentialDto) => {
    const newUser: User = await UserRepository.create(users);
    const newCredential: Credential = await createCredentialService(credential.username, credential.password);
    newUser.Credential = newCredential;
    const result = await UserRepository.save(newUser);
    
    return newUser;
}

