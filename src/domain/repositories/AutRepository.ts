import { AuthDTO } from "../../application/dtos/AuthDTO";
import { CreateUserDTO } from "../../application/dtos/CreateUserDTO";
import { Auth } from "../entities/Auth";
import { User } from "../entities/User";

export interface AuthRepository{
   login(data:AuthDTO):Promise<any>
   logout(userId:string):Promise<string> 
   me(phone:string):Promise<CreateUserDTO | null>
}