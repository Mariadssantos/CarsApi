import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';
import { Router } from 'express';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationController.handle)

export { specificationsRoutes }