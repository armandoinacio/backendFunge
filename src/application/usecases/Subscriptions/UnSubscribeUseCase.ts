import { SubscribeDTO } from "../../../domain/dtos/SubScribeDTO";
import { SubscribeRepositoryImpl } from "../../repositoryImpl/SubScriptionsRepoImpl";

export class UnSubscribeUseCase{
    constructor(public subRepoImpl:SubscribeRepositoryImpl){}
    async execute(data:SubscribeDTO){
    return await this.subRepoImpl.unsubscribe(data)
    }
}