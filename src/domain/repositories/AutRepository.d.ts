import { AuthDTO } from "../dtos/AuthDTO";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { Auth } from "../entities/Auth";
import { User } from "../entities/User";

export interface AuthRepository{
   login(data:AuthDTO):Promise<any>
   logout(userId:string):Promise<string> 
   me(phone:string):Promise<CreateUserDTO | null>
}