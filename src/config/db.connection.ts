const typeorm = require('typeorm');
import {User} from "../config/entity/entity.js"
import { myDataSource } from "./data-source"
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
export let userRepository = myDataSource;
export function getRepository(User: User) {
    throw new Error("Function not implemented.");
}

