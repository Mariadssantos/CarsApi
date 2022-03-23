import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
    sub: string;
}
export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("token missing");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "22027717e054235a874253db64911e42") as IPayload;
        const usersRepository = new UsersRepository()
        const user = usersRepository.findById(user_id);
        if (!user) {
            throw new Error("User does not exist");
        }
        next();
    } catch {
        throw new Error("token invalid!");
    }

}