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
exports.CancelTurn = exports.createNewTurn = exports.getTurnById = exports.getTurnsService = void 0;
const ITurn_1 = require("../interfaces/ITurn");
let turns = [];
let id = 1;
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return turns;
});
exports.getTurnsService = getTurnsService;
const getTurnById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = turns.find((turn) => turn.id === id);
    return turn || null;
});
exports.getTurnById = getTurnById;
const createNewTurn = (date, time, userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userId) {
        throw new Error("No se proporncionó un ID de usuario");
    }
    const newTurn = {
        id,
        date,
        time,
        userId,
        status: ITurn_1.statusEnum.active
    };
    turns.push(newTurn);
    id++;
});
exports.createNewTurn = createNewTurn;
const CancelTurn = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = turns.find((turn) => turn.id === id);
    turn.status = ITurn_1.statusEnum.cancelled;
});
exports.CancelTurn = CancelTurn;
