
import { PrismaUserRepository } from "src/repository/prisma/prisma-user-repository";
import { DeleteUserUseCase } from "../users/delete-user";

export async function makeFactoryDeleteUserUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const deleteUserUseCase = new DeleteUserUseCase(prismaUserRepository)

  return deleteUserUseCase
}