import { Request, Response } from "express";

import { AuthRepositoryImpl } from "../../../../application/repositoryImpl/AuthRepositoryImpl";
import { LoginUseCase } from "../../../../application/usecases/Auth/LoginUseCase";
import { AuthDtoImpl } from "../../../../shared/utils/AuthDTOImpl";
import { AuthRepositoryDataSource } from "../../../database/prisma/auth.repository";
import { passwordComparator } from "../../../../shared/utils/hashPassword";
import { generateToken } from "../../../../shared/utils/jwt";

export class AuthController{
 async login(req: Request, res: Response){
  const loginUseCase=new LoginUseCase(new AuthRepositoryImpl(new AuthRepositoryDataSource()))
  try {
    console.log("before")
    const authDTO=AuthDtoImpl(req.body);
    console.log("authDTO",authDTO)
    const user= await loginUseCase.execute(authDTO);
    if(!user){
      return res.status(401).json({message:"Usuário não existe"})
    }
    const password=passwordComparator(authDTO.password,user.password)
    if(!password){
      return res.status(401).json({message:"Credenciais inválidas"})
    }
   const token= generateToken({
      sub: user.id,
      phone: user.phone
    });
    
    return res.status(201).json({data:user,token:token})
  } catch (error) {
    console.log(error)
  }
 }
}