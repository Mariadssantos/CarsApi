import { AppErrors } from '@errors/AppErrors';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecifiationsRepository';
import { inject, injectable } from 'tsyringe';
interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository) { }
    async execute({ name, description }: IRequest): Promise<void> {
        const SpecificationAlreadyExists = await this.specificationsRepository.findByName(name);
        if (SpecificationAlreadyExists) {
            throw new AppErrors("Specification already exists")
        }
        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };