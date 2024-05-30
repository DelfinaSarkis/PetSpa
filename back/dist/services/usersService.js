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
exports.createUserService = exports.getUserByIdService = exports.getUserService = void 0;
const credentialService_1 = require("./credentialService");
let users = [];
let id = 1;
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUserService = getUserService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users.find((user) => user.id === id);
    return user || null;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (user, credential) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredentialId = yield (0, credentialService_1.createCredentialService)(credential.username, credential.password);
    const newUser = {
        id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        credentialsId: newCredentialId
    };
    users.push(newUser);
    id++;
    return newUser;
});
exports.createUserService = createUserService;
