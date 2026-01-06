import { Auth } from "../../domain/entities/Auth";
import { AuthRepository } from "../../domain/repositories/AutRepository";
import { AuthRepositoryDataSource } from "../../infrastructure/database/prisma/auth.repository";
import { CreateUserDTO } from "../../domain/dtos/CreateUserDTO";

export class AuthRepositoryImpl implements AuthRepository{
    constructor(public authRepositoryDataSource:AuthRepositoryDataSource){}
   async login(data: Auth): Promise<any> {
      return await this.authRepositoryDataSource.login(data);
    }
   async logout(userId: string): Promise<string> {
      return await this.authRepositoryDataSource.logout(userId)
    }
   async me(phone: string): Promise<CreateUserDTO | null> {
        return await this.authRepositoryDataSource.me(phone);
    }

}