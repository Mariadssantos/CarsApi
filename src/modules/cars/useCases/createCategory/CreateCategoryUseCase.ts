import { AppErrors } from '@errors/AppErrors';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import {inject, injectable }from 'tsyringe'

interface IRequest{
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {
    constructor(@inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
        ){}
    async execute({description, name}: IRequest): Promise<void> {
    const categoryAlredyExist = await this.categoriesRepository.findByName(name);
        if(categoryAlredyExist){
            throw new AppErrors ("Category Alredy Exist!");
        }
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase};