import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: "postgres",
    password: "",
    database: "api",
    entities: ["src/config/**/*.js"],
    logging: true,
    synchronize: true,
})