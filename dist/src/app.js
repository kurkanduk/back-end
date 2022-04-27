"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = require('./routes/routes.js');
var app = express();
app.use('/users', router);
app.listen(3030);
