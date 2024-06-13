"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const Turn_1 = require("../entities/Turn");
const TurnRepository = data_source_1.AppDataSource.getRepository(Turn_1.Turn);
exports.default = TurnRepository;
