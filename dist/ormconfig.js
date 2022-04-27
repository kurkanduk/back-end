"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.AppDataSource = {
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: "postgres",
    database: "api",
    entities: ["src/config/**/*.js"],
    logging: true,
    synchronize: true
};
