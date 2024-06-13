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
exports.cancelTurnService = exports.createNewTurnService = exports.getTurnByIdService = exports.getTurnsService = void 0;
const data_source_1 = require("../config/data-source");
const ITurn_1 = require("../interfaces/ITurn");
const TurnRepository_1 = __importDefault(require("../repositories/TurnRepository"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield TurnRepository_1.default.find({ relations: ["User"] });
    return turns;
});
exports.getTurnsService = getTurnsService;
const getTurnByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield TurnRepository_1.default.find({ relations: ["User"] });
    const turn = turns.find((User) => User.id === id);
    return turn || null;
});
exports.getTurnByIdService = getTurnByIdService;
const createNewTurnService = (turn) => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    try {
        queryRunner.startTransaction();
        const newTurn = yield TurnRepository_1.default.create(turn);
        yield queryRunner.manager.save(newTurn);
        const user = yield UserRepository_1.default.findById(turn.userId);
        newTurn.User = user;
        yield queryRunner.manager.save(newTurn);
        yield queryRunner.commitTransaction();
        return newTurn;
    }
    catch (error) {
        yield queryRunner.rollbackTransaction();
        throw Error("Usuario inexistente");
    }
    finally {
        yield queryRunner.release();
    }
    // const newTurn: Turn = await TurnModel.create({date, time});
    // newTurn.status = statusEnum.active;
    // const user: User | null = await UserModel.findOneBy({id: userId});
    // newTurn.User = user;
    // await TurnModel.save(newTurn);
    // return newTurn;
});
exports.createNewTurnService = createNewTurnService;
const cancelTurnService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield TurnRepository_1.default.findOne({ where: { id: id } });
    if (turn) {
        turn.status = ITurn_1.statusEnum.cancelled;
        yield TurnRepository_1.default.save(turn);
    }
    else {
        throw new Error(`Turno con id ${id} no encontrado`);
    }
});
exports.cancelTurnService = cancelTurnService;
