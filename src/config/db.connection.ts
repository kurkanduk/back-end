const typeorm = require('typeorm');
let User = require("./entity/entity.js");
import { myDataSource } from "./data-source"
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
export let data = myDataSource;
