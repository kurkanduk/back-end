import * as express from "express";
import {
    Request,
    Response
} from "express";
let router = require('./routes/routes.js');
const app = express();
app.use(express.json(), router);
app.listen(3030);