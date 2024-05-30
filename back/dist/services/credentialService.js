"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredentialService = exports.createCredentialService = void 0;
let credentials = [];
let id = 1;
const createCredentialService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id,
        username,
        password
    };
    credentials.push(newCredential);
    id++;
    return newCredential.id;
});
exports.createCredentialService = createCredentialService;
const validateCredentialService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = credentials.find((credential) => credential.username === username);
    if (credential && credential.password === password) {
        return credential.id;
    }
    else {
        return null;
    }
});
exports.validateCredentialService = validateCredentialService;
