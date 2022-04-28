"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: "postgres",
    password: "",
    database: "api",
    entities: ["src/config/**/*.js"],
    logging: true,
    synchronize: true,
});
