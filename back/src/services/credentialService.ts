import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
import CredentialRepository from "../repositories/CredentialRepository";
import UserRepository from "../repositories/UserRepository";

let credentials: ICredential[] = [];

let id: number = 1;

export const createCredentialService = async (username: string, password: string): Promise <Credential> => {
        const credential: Credential = await CredentialRepository.create({username,password})
        const result = await CredentialRepository.save(credential);
        return credential;
};

export const validateCredentialService = async (username: string, password: string): Promise <number | null> => {
    const credential = credentials.find((credential: ICredential) => credential.username === username);
    if(credential && credential.password === password){
        return credential.id;
    } else {
        return null;
    }
};

export const loginCredentialService = async (username: string, password: string): Promise<{credential:Credential, userId:Number}| null>=> {
    const credential = await CredentialRepository.findOne({ where: {username} });
    if(credential && credential.password === password){
        return {credential, userId: credential.id};
    } else {
        return null;
    }
};
