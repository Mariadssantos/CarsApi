import { container } from 'tsyringe';
import {ICategoriesRepository} from '../../modules/cars/repositories/ICategoriesRepository';
import {CategoriesRepository} from '../../modules/cars/repositories/implementations/CategoriesRespository';
import {ISpecificationsRepository} from '../../modules/cars/repositories/ISpecifiationsRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);