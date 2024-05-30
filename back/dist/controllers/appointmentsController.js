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
exports.putAppointmentsCancel = exports.postAppointmentsSchedule = exports.getAppointmentsTurn = exports.getAppointmentsList = void 0;
function getAppointmentsList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("Obtiene el listado de todos los turnos de todos los usuarios");
    });
}
exports.getAppointmentsList = getAppointmentsList;
function getAppointmentsTurn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("Obtiene un turno específico");
    });
}
exports.getAppointmentsTurn = getAppointmentsTurn;
function postAppointmentsSchedule(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send("Agenda un nuevo turno");
    });
}
exports.postAppointmentsSchedule = postAppointmentsSchedule;
function putAppointmentsCancel(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200).send('Cambia el estatus de un turno a "cancelled"');
    });
}
exports.putAppointmentsCancel = putAppointmentsCancel;
