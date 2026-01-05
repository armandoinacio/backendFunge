import { AuthDTO } from "../../application/dtos/AuthDTO";

export const AuthDtoImpl=(body:any):AuthDTO=>{
    return {phone:body.phone,
     password:body.password}
}