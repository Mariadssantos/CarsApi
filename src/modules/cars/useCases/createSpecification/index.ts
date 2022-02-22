import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";


const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const crateSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { crateSpecificationController };