 var userRepository = require('../config/db.connection.js')
 import {Request, Response} from "express";
 let User = require("../config/entity/entity.js");

async function getAll(req: Request, res: Response) {
    const users = await userRepository.getRepository(User).find();
    res.json(users);
}
async function getOne(req: Request, res: Response) {
    const results = await userRepository.getRepository(User).findOne({where: {id: parseInt(req.params.id, 10)}});
    return res.send(results);
}
async function createOne(req: Request, res: Response) {
    const user = await userRepository.create(req.body);
    const results = await userRepository.getRepository(User).save(user);
    return res.send(results);
}
async function updateOne(req: Request, res: Response) {
    const user = await userRepository.getRepository(User).findOne({where: {id: parseInt(req.params.id, 10)}});
    userRepository.merge(user, req.body);
    const results = await userRepository.getRepository(User).save(user);
    return res.send(results);
}
async function deleteOne(req: Request, res: Response) {
    const results = await userRepository.getRepository(User).delete(req.params.id);
    return res.send(results);
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    createOne: createOne,
    updateOne: updateOne,
    deleteOne: deleteOne,
};