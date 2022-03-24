import express from 'express';
import { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import './database';
import './shared/container';
import { router } from './routes';
import SwaggerFile from './swagger.json';
import { AppErrors } from './errors/AppErrors';


const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerFile));

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppErrors){
        return res.status(err.statusCode).json({message: err.message});
    }

    return res.status(500).json({ status: "error", message: `Internal Server Error - ${err.message}`});
})

app.listen(3333, () => console.log("Server is running"));