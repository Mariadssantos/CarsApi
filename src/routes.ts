import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function CreateCourse(req: Request, res: Response){
    CreateCourseService.execute({
        name: "Maria",
        duration: 1,
        educator: "Dani"
    });

    return res.send()
}