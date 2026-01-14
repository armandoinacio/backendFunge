import { SubscribeDTO } from "../dtos/SubScribeDTO";
export interface SubscribeRepository{
    subscribe(data:SubscribeDTO):Promise<any>
    unsubscribe(data:SubscribeDTO):Promise<any>
    getSubById(id:string):Promise<any>
    getSubscribers():Promise<any>

}