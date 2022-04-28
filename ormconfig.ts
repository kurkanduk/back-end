export let AppDataSource = {
    type: "postgres",
    host: "localhost",
    port: 3000,
    username: "postgres",
    database: "api",
    entities: ["src/config/**/*.js"],
    logging: true,
    synchronize: true
  }