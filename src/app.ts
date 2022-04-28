import * as express from "express";
let router = require("./routes/routes")
let app = express();
app.use('/', router);
app.listen(3030);