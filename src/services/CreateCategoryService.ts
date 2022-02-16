import { CategoriesRepository } from '../repositories/CategoriesRespository';

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository){}
    execute({description, name}: IRequest){
        const categoryAlredyExist = this.categoriesRepository.findByName(name);

        if(categoryAlredyExist){
            throw new Error ("Category Alredy Exist!")
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryService};