import { PlanRepositoryImpl } from "../../repositoryImpl/PlanReopsitoryImpl";

export class RemovePlanUseCase {
    constructor(public planRepoIml:PlanRepositoryImpl){}
    async execute(id:string){
        return await this.planRepoIml.remove(id)
    }
}