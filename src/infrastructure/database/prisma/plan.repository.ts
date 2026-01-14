import { PlanDTO } from "../../../domain/dtos/PlanDTO";
import { PlanRepository } from "../../../domain/repositories/PlanRepository";
import { prisma } from "./client";
export class PlanRepositoryDataSource implements PlanRepository{
    async create(data: PlanDTO): Promise<any> {
        return await prisma.plan.create({data:{...data}})
    }
    async update(data: PlanDTO): Promise<any> {
       return await prisma.plan.update({where:{id:data.id},data:{...data}}) 
    
    }
    async remove(id: string): Promise<any> {
        return await prisma.plan.delete({where:{id:id}})
    }
    async getAll(): Promise<any> {
        return await prisma.plan.findMany()
    }
    async getById(id: string): Promise<any> {
       return await prisma.plan.findUnique({where:{id:id}})
    }
   async getByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}