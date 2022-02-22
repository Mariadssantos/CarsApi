import { Router } from 'express';

import { crateSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
return crateSpecificationController.handle(req, res);
})

export { specificationsRoutes }