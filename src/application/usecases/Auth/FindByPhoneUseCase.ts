import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class FindByPhoneUseCase{
    constructor(private userRepository: IUserRepository){

    }
    async execute(telefone: string){
        const user = await this.userRepository.findByTelefone(telefone);
        return user;
    }
}