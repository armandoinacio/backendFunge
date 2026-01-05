import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserRepositoryDataSource } from "../../infrastructure/database/prisma/user.repository";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class UserRepositoryIml implements IUserRepository {
    constructor(private userRepo:UserRepositoryDataSource){}
    create(data: CreateUserDTO): Promise<void> {
        return this.userRepo.create(data);
    }
    findByTelefone(telefone: string): Promise<any | null> {
       return this.userRepo.findByTelefone(telefone);
    }

}