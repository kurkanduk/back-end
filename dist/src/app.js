"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = require("./routes/routes");
var app = express();
app.use('/', router);
app.listen(3030);
