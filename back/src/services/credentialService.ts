import ICredential from "../interfaces/ICredential";

let credentials: ICredential[] = [];

let id: number = 1;

export const createCredentialService = async (username: string, password: string): Promise <number> => {
        const newCredential: ICredential = {
            id,
            username,
            password
        };
        credentials.push(newCredential)
        id++;
        return newCredential.id;
};

export const validateCredentialService = async (username: string, password: string): Promise <number | null> => {
    const credential = credentials.find((credential: ICredential) => credential.username === username);
    if(credential && credential.password === password){
        return credential.id;
    } else {
        return null;
    }
};