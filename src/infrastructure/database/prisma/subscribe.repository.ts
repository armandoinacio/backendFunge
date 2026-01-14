import { SubscribeDTO } from "../../../domain/dtos/SubScribeDTO";
import { SubscribeRepository } from "../../../domain/repositories/SubscribeRepository";
import {prisma} from './client'
export class SubscribeRepositoryDataSource implements SubscribeRepository {
  async  getSubById(id: string): Promise<any> {
    return await prisma.subscritions.findUnique({where:{id:id}})
    }
    async subscribe(data: SubscribeDTO): Promise<any> {
       return await prisma.subscritions.create({data:{...data}})
    }
   async unsubscribe(data: SubscribeDTO): Promise<any> {
        return await prisma.subscritions.delete({where:{id:data.subId}})
    }
   async getSubscribers(): Promise<any> {
        return await prisma.subscritions.findMany()
    }

}