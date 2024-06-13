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
exports.userLogin = exports.createUserController = exports.getUserByIdController = exports.getUsersController = void 0;
const usersService_1 = require("../services/usersService");
const credentialService_1 = require("../services/credentialService");
function getUsersController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, usersService_1.getUserService)();
            res.status(200).json(users);
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al obtener usuarios' });
        }
    });
}
exports.getUsersController = getUsersController;
;
function getUserByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (Number(req.params.id));
            const user = yield (0, usersService_1.getUserByIdService)(id);
            if (user) {
                res.status(200).json(user);
            }
            else {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
        }
        catch (error) {
            console.error('Error:', error);
            res.status(400).json({ error: 'Error al obtener usuario' });
        }
    });
}
exports.getUserByIdController = getUserByIdController;
;
function createUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, birthdate, nDni, username, password } = req.body;
            if (!name || !email || !birthdate || !nDni || !username || !password) {
                res.status(400).json({ error: "Completa todos los campos por favor" });
            }
            const newUser = yield (0, usersService_1.createUserService)({ name, email, birthdate, nDni }, { username, password });
            res.status(201).json(newUser);
        }
        catch (error) {
            console.error('Error:', error);
            res.status(400).json({ error: 'Error al crear usuario' });
        }
    });
}
exports.createUserController = createUserController;
;
function userLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ error: "Completa todos los campos por favor" });
            }
            const credential = yield (0, credentialService_1.loginCredentialService)(username, password);
            if (credential) {
                res.status(200).json(credential);
            }
            else {
                return res.status(400).json({ error: 'Credenciales incorrectas' });
            }
        }
        catch (error) {
            console.log('Error:', error);
            res.status(500).json({ error: 'Error al intentar iniciar sesión' });
        }
    });
}
exports.userLogin = userLogin;
;
