import { SubscribeDTO } from "../../../domain/dtos/SubScribeDTO";
import { SubscribeRepositoryImpl } from "../../repositoryImpl/SubScriptionsRepoImpl";

export class SubscribeUseCase{
    constructor(public subRepoImpl:SubscribeRepositoryImpl){}
    async execute(data:SubscribeDTO){
    return await this.subRepoImpl.subscribe(data)
    }
}