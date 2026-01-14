import { PlanDTO } from "../../../domain/dtos/PlanDTO";
import { PlanRepositoryImpl } from "../../repositoryImpl/PlanReopsitoryImpl";

export class UpdatePlanUseCase {
    constructor(public planRepositoryImpl:PlanRepositoryImpl){}
    async execute(data:PlanDTO){
        return await this.planRepositoryImpl.update(data)
    }
}