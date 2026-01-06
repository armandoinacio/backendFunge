import { CreateUserDTO } from "../dtos/CreateUserDTO";

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<void>
  findByTelefone(telefone: string): Promise<any | null>
}
