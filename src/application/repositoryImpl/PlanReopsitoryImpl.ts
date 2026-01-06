import { PlanDTO } from "../../domain/dtos/PlanDTO";
import { PlanRepository } from "../../domain/repositories/PlanRepository";
import { PlanRepositoryDataSource } from "../../infrastructure/database/prisma/plan.repository";

export class PlanRepositoryImpl implements PlanRepository{
    constructor(public planRepositoryDataSource:PlanRepositoryDataSource){}
    async create(data: PlanDTO): Promise<string> {
       return await this.planRepositoryDataSource.create(data)
    }
    async update(data: PlanDTO): Promise<any> {
        return await this.planRepositoryDataSource.update(data)
    }
    async remove(id: string): Promise<string> {
        return await this.planRepositoryDataSource.remove(id)
    }
    async getAll(): Promise<any> {
        return await this.planRepositoryDataSource.getAll()
    }
    async getById(id: string): Promise<any> {
        return await this.planRepositoryDataSource.getById(id)
    }
    async getByName(name: string): Promise<any> {
        return await this.planRepositoryDataSource.getByName(name)
    }

}