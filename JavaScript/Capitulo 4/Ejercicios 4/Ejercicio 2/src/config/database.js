import { createPool } from 'mysql2'

export const connection = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "carrera"
})