import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest{
    name: string;
    description: string;
}
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}
    execute({description, name}: IRequest){
        const categoryAlredyExist = this.categoriesRepository.findByName(name);

        if(categoryAlredyExist){
            throw new Error ("Category Alredy Exist!")
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase};