import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { hash } from 'bcryptjs'

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({ name, password, email, driver_license })
    }
}

export { CreateUserUseCase }
