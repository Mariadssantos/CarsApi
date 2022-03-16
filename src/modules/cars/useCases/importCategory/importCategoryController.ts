import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './importCategoryUseCase';
import { container } from 'tsyringe'
class ImportCategoryController{
    handle(req: Request, res: Response): Response {
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        const { file } = req
        importCategoryUseCase.execute(file)
        return res.send()
    }
}

export { ImportCategoryController };