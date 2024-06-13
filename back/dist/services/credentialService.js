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
exports.loginCredentialService = exports.createCredentialService = void 0;
const CredentialRepository_1 = __importDefault(require("../repositories/CredentialRepository"));
const createCredentialService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield CredentialRepository_1.default.create({ username, password });
    const result = yield CredentialRepository_1.default.save(credential);
    return credential;
});
exports.createCredentialService = createCredentialService;
const loginCredentialService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield CredentialRepository_1.default.findOne({ where: { username } });
    if (credential && credential.password === password) {
        return credential.id;
    }
    else {
        return null;
    }
});
exports.loginCredentialService = loginCredentialService;
