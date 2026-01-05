import { prisma } from "./client";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { CreateUserDTO } from "../../../application/dtos/CreateUserDTO";

export class UserRepositoryDataSource implements IUserRepository {

  async findByTelefone(telefone: string) {
    return prisma.user.findUnique({ where: { phone:telefone } });
  }
  async create(data: CreateUserDTO): Promise<void> {
    await prisma.user.create({data:{
      ...data,
      cautions:data.cautions?data.cautions:[]
    }
    
    });
  }
}
