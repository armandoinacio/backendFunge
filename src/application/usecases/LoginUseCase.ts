import { Auth } from "../../domain/entities/Auth";
import { AuthDTO } from "../dtos/AuthDTO";
import { AuthRepositoryImpl } from "../repositoryImpl/AuthRepositoryImpl";

export class LoginUseCase{
    constructor(public authRepositoryImpl:AuthRepositoryImpl){}
    async execute(data:AuthDTO){
     return this.authRepositoryImpl.authRepositoryDataSource.login(data)
    }
}