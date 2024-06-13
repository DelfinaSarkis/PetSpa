"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Turn_1 = require("../entities/Turn");
const Credential_1 = require("../entities/Credential");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "25022006",
    database: "typeorm",
    synchronize: true,
    logging: ["error"],
    entities: [User_1.User, Turn_1.Turn, Credential_1.Credential],
    subscribers: [],
    migrations: [],
    //dropSchema: true
});
