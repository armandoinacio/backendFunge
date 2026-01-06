import { AuthDTO } from "../../domain/dtos/AuthDTO";

export const AuthDtoImpl=(body:any):AuthDTO=>{
    return {phone:body.phone,
     password:body.password}
}