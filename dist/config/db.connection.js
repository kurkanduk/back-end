"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
var typeorm = require('typeorm');
var User = require("./entity/entity.js");
var data_source_1 = require("./data-source");
data_source_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
    console.log(exports.userRepository);
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
exports.userRepository = data_source_1.myDataSource;
