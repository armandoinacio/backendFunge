import { PlanRepositoryImpl } from "../../repositoryImpl/PlanReopsitoryImpl";

export class GetPlanByIdUseCase{
    constructor(public planRepoIml:PlanRepositoryImpl){}
    async execute(id:string){
        return await this.planRepoIml.getById(id)
    }
}