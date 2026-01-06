import { PlanDTO } from "../dtos/PlanDTO";

export interface PlanRepository{
    create(data:PlanDTO):Promise<string>
    update(data:PlanDTO):Promise<any>
    remove(id:string):Promise<string>
    getAll():Promise<any>
    getById(id:string):Promise<any>
    getByName(name:string):Promise<any>
}