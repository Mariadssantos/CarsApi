import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const category = new Category();

    //função do js que que permite que a gente atribua atributos ao nosso objeto.
    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    });
    categories.push(category);

    return res.status(201).send(categories);
})

export {categoriesRoutes};