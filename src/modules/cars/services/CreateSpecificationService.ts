import { ISpecificationsRepository } from '../repositories/ISpecifiationsRepository'
interface IRequest{
    name: string;
    description: string;
}
class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository){}
    execute({name,description}: IRequest): void{
        const SpecificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(SpecificationAlreadyExists){
            throw new Error ("Specification already exists")
        }

        this.specificationsRepository.create({name, description});
    }
}

export { CreateSpecificationService };