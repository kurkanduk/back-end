"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepository = exports.userRepository = void 0;
var typeorm = require('typeorm');
var data_source_1 = require("./data-source");
data_source_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
exports.userRepository = data_source_1.myDataSource;
function getRepository(User) {
    throw new Error("Function not implemented.");
}
exports.getRepository = getRepository;
