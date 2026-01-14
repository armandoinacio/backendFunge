import { PlanRepositoryImpl } from "../../../../application/repositoryImpl/PlanReopsitoryImpl";
import { CreatePlanUseCase } from "../../../../application/usecases/Plan/CreatePlanUseCase";
import { GetAllPlanUseCase } from "../../../../application/usecases/Plan/GetAllPlanUseCase";
import { GetPlanByIdUseCase } from "../../../../application/usecases/Plan/GetPlanByIdUseCase";
import { RemovePlanUseCase } from "../../../../application/usecases/Plan/RemovePlanUseCase";
import { UpdatePlanUseCase } from "../../../../application/usecases/Plan/UpdatePlanUseCase";
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
    async getAll(req:Request,res:Response){
        try {
            const planUseCase=new GetAllPlanUseCase(new PlanRepositoryImpl(new PlanRepositoryDataSource()))
            await planUseCase.execute();
            return res.status(200).json({status:"success", planos:planUseCase})

        } catch (error) {
            return res.status(401).json({error:"Erro ao buscar os planos",type:error})
     
        }
    }
    async getById(req:Request,res:Response){
        try {
          
            const planUseCase=new GetPlanByIdUseCase(new PlanRepositoryImpl(new PlanRepositoryDataSource()))
            await planUseCase.execute(req.body.id);
            return res.status(200).json({status:"success", planos:planUseCase})

        } catch (error) {
            return res.status(401).json({error:"Erro ao buscar os planos",type:error})
        }
    }
    async update(req:Request,res:Response){
        try {
            const plan=PlanDTOImpl(req.body)
            const planUseCase=new UpdatePlanUseCase(new PlanRepositoryImpl(new PlanRepositoryDataSource()))
            await planUseCase.execute(plan);
            return res.status(200).json({status:"success", planos:planUseCase})
  
        } catch (error) {
            return res.status(401).json({error:"Erro ao actualizar os planos",type:error})
     
        }
    }

    async remove(req:Request,res:Response){
        try {
            
            const planUseCase=new RemovePlanUseCase(new PlanRepositoryImpl(new PlanRepositoryDataSource()))
            await planUseCase.execute(req.body.id);
            return res.status(200).json({status:"success", planos:planUseCase})

        } catch (error) {
            return res.status(401).json({error:"Erro ao remover os planos",type:error})
        }
    }

}