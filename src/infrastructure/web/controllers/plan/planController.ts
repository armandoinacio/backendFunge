import { PlanRepositoryImpl } from "../../../../application/repositoryImpl/PlanReopsitoryImpl";
import { CreatePlanUseCase } from "../../../../application/usecases/Plan/CreatePlanUseCase";
import { PlanDTOImpl } from "../../../../shared/utils/PlanDTOImpl";
import { PlanRepositoryDataSource } from "../../../database/prisma/plan.repository";
import { Request,Response } from "express";
export class PlanController{
    async createPlan(req:Request,res:Response){
        try {
            const planDto=PlanDTOImpl(req.body);
            const planUseCase=new CreatePlanUseCase(new PlanRepositoryImpl(new PlanRepositoryDataSource()))
            await planUseCase.execute(planDto);
           return res.status(201).json({status:"success", message:"plano criado!"})
        } catch (error) {
            
            return res.status(401).json({error:"Erro ao criar planos",type:error})
        }
        
    }
}