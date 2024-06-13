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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.getUserByIdService = exports.getUserService = void 0;
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const credentialService_1 = require("./credentialService");
const getUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserRepository_1.default.find({ relations: ["Turn"] });
    return users;
});
exports.getUserService = getUserService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserRepository_1.default.find({ relations: ["Turn"] });
    const user = users.find((Turn) => Turn.id === id);
    return user || null;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (users, credential) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield UserRepository_1.default.create(users);
    const newCredential = yield (0, credentialService_1.createCredentialService)(credential.username, credential.password);
    newUser.Credential = newCredential;
    const result = yield UserRepository_1.default.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
