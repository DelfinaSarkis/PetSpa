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
exports.postUsersLogin = exports.postUsersRegister = exports.getUsersId = exports.getUsersList = void 0;
const usersService_1 = require("../services/usersService");
const console_1 = require("console");
function getUsersList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, usersService_1.getUserService)();
        }
        catch (_a) {
            console.log(console_1.error);
        }
    });
}
exports.getUsersList = getUsersList;
function getUsersId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("Obtiene el detalle de un usuario específico");
    });
}
exports.getUsersId = getUsersId;
function postUsersRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("Registro de un nuevo usuario");
    });
}
exports.postUsersRegister = postUsersRegister;
function postUsersLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("Login del usuario a la aplicación");
    });
}
exports.postUsersLogin = postUsersLogin;
