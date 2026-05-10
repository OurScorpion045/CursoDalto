import { connection } from "../config/database.js";

class MateriasModel {
    constructor(database) {
        this.database = connection;
    }

    getAllMateriasModel = async () => {
        const sql = "SELECT * FROM materias";
        const [rows] = await this.database.execute(sql);
        return rows;
    }

    getMateriasByIdModel = async (id) => {
        const sql = "SELECT * FROM materias WHERE id = ?";
        const [rows] = await this.database.execute(sql, [id]);
        return rows;
    }

    insertMateriasModel = async ({nombre}) => {
        const sql = "INSERT INTO materias(nombre) VALUES (?)";
        const [rows] = await this.database.execute(sql, [nombre]);
        return rows;
    }

    updateMateriasModel = async ({nombre}) => {
        const sql = "UPDATE materias SET nombre = (?)";
        const [rows] = await this.database.execute(sql, [nombre]);
        return rows;
    }

    deleteMateriasModel = async (id) => {
        const sql = "DELETE FROM materias WHERE id = ?";
        const [rows] = await this.database.execute(sql, [id]);
        return rows;
        }
}