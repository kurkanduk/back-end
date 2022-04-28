 import {Request, Response} from "express";
 import {User} from "../config/entity/entity.js"
 const typeorm = require('typeorm');
 import { userRepository } from "../config/db.connection";
 
let repa = userRepository.getRepository(User);
async function getAll(req: Request, res: Response) {

    const users = await repa.find();

    res.json(users);
}
async function getOne(req: Request, res: Response) {
    const results = await repa.findOne({where: {id: parseInt(req.params.id, 10)}});
    return res.send(results);
}
async function createOne(req: Request, res: Response) {
    const user = await repa.create(req.body);
    const results = await repa.save(user);
    return res.send(results);
}
async function updateOne(req: Request, res: Response) {
    const user = await repa.findOne({where: {id: parseInt(req.params.id, 10)}});
    repa.merge(user, req.body);
    const results = await repa.save(user);
    return res.send(results);
}
async function deleteOne(req: Request, res: Response) {
    const results = await repa.delete(req.params.id);
    return res.send(results);
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    createOne: createOne,
    updateOne: updateOne,
    deleteOne: deleteOne,
};