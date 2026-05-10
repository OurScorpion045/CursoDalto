import * as materiasModel from "../models/materias.model.js";

export default class MateriasController {
    constructor(model) {
        this.model = materiasModel;
    }

    getAllMateriasController = async (req, res) => {
        try {
            const [rows] = await this.model.getAllMateriasModel();
            res.json(rows);
        } catch (error) {
            res.status(500).json({ message: 'Error' });
        }
    };

    getMateriasByIdController = async (req, res) => {
        try {
            const [rows] = await this.model.getMateriasByIdModel();
            res.json(rows);
        } catch (error) {
            res.status(500).json({message: 'Error'});
        }
    }

    insertMateriasController = async (req, res) => {
        try {
            const [rows] = await this.model.insertMateriasModel();
            res.json(rows);
        } catch (error) {
            res.status(500).json({message: 'Error'});
        }
    }

    updateMateriasController = async (req, res) => {
        try {
            const [rows] = await this.model.updateMateriasModel();
            res.json(rows);
        } catch (error) {
            res.status(500).json({message: 'Error'});
        }
    }

    deleteMateriasController = async (req, res) => {
        try {
            const [rows] = await this.model.deleteMateriasModel();
            res.json(rows);
        } catch (error) {
            res.status(500).json({message: 'Error'});
        }
    }
}