import { SubscribeDTO } from "../../domain/dtos/SubScribeDTO";
import { SubscribeRepository } from "../../domain/repositories/SubscribeRepository";
import { SubscribeRepositoryDataSource } from "../../infrastructure/database/prisma/subscribe.repository";

export class SubscribeRepositoryImpl implements SubscribeRepository{
    constructor(public subRepoDataSource:SubscribeRepositoryDataSource){}
    async getSubById(id: string): Promise<any> {
      return await this.subRepoDataSource.getSubById(id)
    }

   async subscribe(data: SubscribeDTO): Promise<any> {
        return await this.subRepoDataSource.subscribe(data)
    }
   async unsubscribe(data: SubscribeDTO): Promise<any> {
    return await this.subRepoDataSource.unsubscribe(data)
    }
   async getSubscribers(): Promise<any> {
    return await this.subRepoDataSource.getSubscribers()
    }
}