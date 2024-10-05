
import { PrismaUserRepository } from "src/repository/prisma/prisma-user-repository";
import { CreateUserUseCase } from "../users/create-user";

export async function makeFactoryUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const createUserUseCase = new CreateUserUseCase(prismaUserRepository)

  return createUserUseCase
}