import { PlanRepositoryImpl } from "../../repositoryImpl/PlanReopsitoryImpl";

export class GetAllPlanUseCase{
    constructor(public planRepoIml:PlanRepositoryImpl){}
    async execute(){
        return await this.planRepoIml.getAll()
    }
}