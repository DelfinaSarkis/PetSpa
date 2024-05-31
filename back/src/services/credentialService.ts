import { CredentialModel } from "../config/data-source";
import { Credential } from "../entities/Credential";
import ICredential from "../interfaces/ICredential";

let credentials: ICredential[] = [];

let id: number = 1;

export const createCredentialService = async (username: string, password: string): Promise <Credential> => {
        const credential: Credential = await CredentialModel.create({username,password})
        const result = await CredentialModel.save(credential);
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