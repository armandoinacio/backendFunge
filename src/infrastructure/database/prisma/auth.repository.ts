import { AuthDTO } from "../../../application/dtos/AuthDTO";
import { AuthRepository } from "../../../domain/repositories/AutRepository";
import { prisma } from "./client";
import jwt from "jsonwebtoken"
export  class AuthRepositoryDataSource implements AuthRepository{
   async login(data: AuthDTO): Promise<any> {
       return await prisma.user.findUnique({where:{phone:data.phone}})
    }
    logout(userId: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    async me(phone: string): Promise<any> {
        return await prisma.user.findUnique({where:{phone:phone}})
    }

}