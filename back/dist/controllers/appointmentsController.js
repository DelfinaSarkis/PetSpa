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
exports.cancelTurnController = exports.createNewTurnController = exports.getTurnByIdController = exports.getTurnsController = void 0;
const turnService_1 = require("../services/turnService");
const ITurn_1 = require("../interfaces/ITurn");
function getTurnsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const turns = yield (0, turnService_1.getTurnsService)();
            res.status(200).json(turns);
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al obtener turnos' });
        }
    });
}
exports.getTurnsController = getTurnsController;
;
function getTurnByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (Number(req.params.id));
            const turn = yield (0, turnService_1.getTurnByIdService)(id);
            if (turn) {
                res.status(200).json(turn);
            }
            else {
                res.status(404).json({ error: 'Turno no encontrado' });
            }
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al obtener turno' });
        }
    });
}
exports.getTurnByIdController = getTurnByIdController;
;
function createNewTurnController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { date, time, userId } = req.body;
        try {
            if (!userId) {
                res.status(400).json({ error: 'No se encuentra el usuario para asignarle el turno' });
                return;
            }
            const newTurnData = {
                date: new Date(date),
                time: time,
                userId: userId,
                status: ITurn_1.statusEnum.active
            };
            const newTurn = yield (0, turnService_1.createNewTurnService)(newTurnData);
            res.status(201).json(newTurn);
        }
        catch (error) {
            console.error('Error:', error);
            res.status(400).json({ error: 'Error al crear turno' });
        }
    });
}
exports.createNewTurnController = createNewTurnController;
;
function cancelTurnController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            console.log(id);
            yield (0, turnService_1.cancelTurnService)(Number(id));
            res.status(200).json("AAAAAAA");
        }
        catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al cancelar el turno' });
        }
    });
}
exports.cancelTurnController = cancelTurnController;
;
