import { SubscribeDTO } from "../../../domain/dtos/SubScribeDTO";
import { SubscribeRepositoryImpl } from "../../repositoryImpl/SubScriptionsRepoImpl";

export class GetSubscribeUseCase{
    constructor(public subRepoImpl:SubscribeRepositoryImpl){}
    async execute(){
    return await this.subRepoImpl.getSubscribers()
    }
}