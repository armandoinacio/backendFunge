import { Request, Response } from "express";
import {  UserRepositoryDataSource } from "../../../database/prisma/user.repository";
import { CreateUserUseCase } from "../../../../application/usecases/CreateUserUseCase";
import { UserRepositoryIml } from "../../../../application/repositoryImpl/UserRepsitoryImpl";
import { CreateUserDTO } from "../../../../application/dtos/CreateUserDTO";
import { DTOUser } from "../../../../shared/utils/DTOUser";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const useCase = new CreateUserUseCase( new UserRepositoryIml(new UserRepositoryDataSource()));
    const userDto: CreateUserDTO=DTOUser(req.body);
    await useCase.execute(userDto);
    return res.status(201).json({ message: "Conta criada com sucesso" });
  }

  async findByPhone(req: Request, res: Response) {
    const userRepository = new UserRepositoryIml(new UserRepositoryDataSource());
    const telefone = req.params.telefone;
    const user = await userRepository.findByTelefone(telefone);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
  }
}
