import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../repositories/ISpecifiationsRepository';
interface IRequest {
    name: string;
    description: string;
}
injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository) { }
    execute({ name, description }: IRequest): void {
        const SpecificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (SpecificationAlreadyExists) {
            throw new Error("Specification already exists")
        }
        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };