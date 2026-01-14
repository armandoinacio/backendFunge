import { SubscribeRepositoryImpl } from "../../../../application/repositoryImpl/SubScriptionsRepoImpl";
import { GetSubscribeByIdUseCase } from "../../../../application/usecases/Subscriptions/GetSubByIdUseCase";
import { GetSubscribeUseCase } from "../../../../application/usecases/Subscriptions/GetSubUseCase";
import { SubscribeUseCase } from "../../../../application/usecases/Subscriptions/SubscribeUseCase";
import { UnSubscribeUseCase } from "../../../../application/usecases/Subscriptions/UnSubscribeUseCase";
import { SubDTOImpl } from "../../../../shared/utils/SubDTOImpl";
import { SubscribeRepositoryDataSource } from "../../../database/prisma/subscribe.repository";
import { Response,Request } from "express";
export class SubsController{
    async subscribe(req:Request,res:Response){
           try {
            const subDTO=SubDTOImpl(req.body)
            const subUseCase=new SubscribeUseCase(new SubscribeRepositoryImpl(new SubscribeRepositoryDataSource()))
            await subUseCase.execute(subDTO)
            return res.status(201).json({status:"success", message:"Subscrição feita com sucesso"})
           } catch (error) {
            return res.status(401).json({error:"Erro ao adicionar o subscritor",type:error})
     
           }
    }

    async unsubscribe(req:Request,res:Response){
        try {
            const subDTO=SubDTOImpl(req.body)
            const subUseCase=new UnSubscribeUseCase(new SubscribeRepositoryImpl(new SubscribeRepositoryDataSource()))
            await subUseCase.execute(subDTO)
            return res.status(200).json({status:"success", message:"Subscrição cancelada com sucesso"})

        } catch (error) {
            return res.status(401).json({error:"Erro ao cancelar o subscritor",type:error})
     
        }
    }

    async getSubscriberById(req:Request,res:Response){
       
        try {
            const subUseCase=new GetSubscribeByIdUseCase(new SubscribeRepositoryImpl(new SubscribeRepositoryDataSource()))
            await subUseCase.execute(req.body.id)
            return res.status(200).json({status:"success", subscriber:subUseCase})

        } catch (error) {
            return res.status(401).json({error:"Erro ao listar os subscritores",type:error})
 
        }  
}

    async getSubscribers(res:Response){
       
            try {
               
                const subUseCase=new GetSubscribeUseCase(new SubscribeRepositoryImpl(new SubscribeRepositoryDataSource()))
                await subUseCase.execute()
                return res.status(200).json({status:"success", subcribers:subUseCase})
    
            } catch (error) {
                return res.status(401).json({error:"Erro ao listar os subscritores",type:error})
     
            }  
    }
}