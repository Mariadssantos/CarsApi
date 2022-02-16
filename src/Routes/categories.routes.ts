import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRespository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const categoryAlredyExist = categoriesRepository.findByName(name);

    if(categoryAlredyExist){
        return res.status(400).json({ error: "Category Alredy Exist!"})
    }

    categoriesRepository.create({name, description})

    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();

    return res.json(all)
})

export {categoriesRoutes};