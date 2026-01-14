
import { SubscribeRepositoryImpl } from "../../repositoryImpl/SubScriptionsRepoImpl";

export class GetSubscribeByIdUseCase{
    constructor(public subRepoImpl:SubscribeRepositoryImpl){}
    async execute(id:string){
    return await this.subRepoImpl.getSubById(id)
    }
}