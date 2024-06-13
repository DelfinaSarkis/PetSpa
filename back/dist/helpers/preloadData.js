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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadTurnData = exports.preloadUserData = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
const IPreloadTurns_1 = require("../interfaces/IPreloadTurns");
const IPreloadUser_1 = require("../interfaces/IPreloadUser");
const CredentialRepository_1 = __importDefault(require("../repositories/CredentialRepository"));
const TurnRepository_1 = __importDefault(require("../repositories/TurnRepository"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const preloadUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const users = yield UserRepository_1.default.find();
        if (users.length)
            return console.log(("No se hizo la precarga de datos"));
        try {
            for (var _d = true, preloadUser_1 = __asyncValues(IPreloadUser_1.preloadUser), preloadUser_1_1; preloadUser_1_1 = yield preloadUser_1.next(), _a = preloadUser_1_1.done, !_a; _d = true) {
                _c = preloadUser_1_1.value;
                _d = false;
                const user = _c;
                const newUser = yield UserRepository_1.default.create(user);
                const newCredential = new Credential_1.Credential();
                newCredential.username = user.username;
                newCredential.password = user.password;
                const savedCredential = yield CredentialRepository_1.default.save(newCredential);
                newUser.Credential = savedCredential;
                yield transactionalEntityManager.save(newUser);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadUser_1.return)) yield _b.call(preloadUser_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log("Precarga de datos de usuarios realizada con éxito");
    }));
});
exports.preloadUserData = preloadUserData;
const preloadTurnData = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    try {
        yield queryRunner.startTransaction();
        for (const turn of IPreloadTurns_1.preloadTurn) {
            const newTurn = TurnRepository_1.default.create(turn);
            yield queryRunner.manager.save(newTurn);
            const user = yield UserRepository_1.default.findOneBy({ id: turn.userId });
            if (!user)
                throw new Error("Usuario inexistente");
            newTurn.User = user;
            yield queryRunner.manager.save(newTurn);
        }
        yield queryRunner.commitTransaction();
        console.log("Precarga de turnos realizada con éxito");
    }
    catch (error) {
        console.error("Error al intentar crear los turnos", error);
        yield queryRunner.rollbackTransaction();
    }
    finally {
        console.log("Ha finalizado el intento de precarga");
        yield queryRunner.release();
    }
});
exports.preloadTurnData = preloadTurnData;
