import { PlanDTO } from "../../../domain/dtos/PlanDTO";
import { PlanRepository } from "../../../domain/repositories/PlanRepository";
import { prisma } from "./client";
export class PlanRepositoryDataSource implements PlanRepository{
    async create(data: PlanDTO): Promise<any> {
        return await prisma.plan.create({data:{...data}})
    }
    update(data: PlanDTO): Promise<any> {
        throw new Error("Method not implemented.");
    }
    remove(id: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}