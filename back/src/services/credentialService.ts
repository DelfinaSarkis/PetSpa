import { Credential } from "../entities/Credential";
import CredentialRepository from "../repositories/CredentialRepository";

export const createCredentialService = async (username: string, password: string): Promise <Credential> => {
        const credential: Credential = await CredentialRepository.create({username,password})
        const result = await CredentialRepository.save(credential);
        return credential;
};

export const loginCredentialService = async (username: string, password: string): Promise<number | null>=> {
    const credential = await CredentialRepository.findOne({ where: {username} });
    if(credential && credential.password === password){
        return credential.id;
    } else {
        return null;
    }
};