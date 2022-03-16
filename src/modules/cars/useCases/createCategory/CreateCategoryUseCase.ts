import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest{
    name: string;
    description: string;
}
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}
    async execute({description, name}: IRequest): Promise<void> {
    const categoryAlredyExist = await this.categoriesRepository.findByName(name);
        if(categoryAlredyExist){
            throw new Error ("Category Alredy Exist!");
        }
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase};