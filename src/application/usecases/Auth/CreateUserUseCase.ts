import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { CreateUserDTO } from "../../../domain/dtos/CreateUserDTO";
import bcrypt from "bcrypt";
import { UserRepositoryIml } from "../../repositoryImpl/UserRepsitoryImpl";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryIml) {}

  async execute(data: CreateUserDTO) {
    const exists = await this.userRepository.findByTelefone(data.phone);

    if (exists) {
      throw new Error("Telefone já cadastrado");
    }

    const senhaHash = await bcrypt.hash(data.password, 10);

    await this.userRepository.create({
      ...data,
      password: senhaHash
    });
  }
}
