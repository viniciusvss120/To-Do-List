
import { PrismaUserRepository } from "src/repository/prisma/prisma-user-repository";
import { EditUserUseCase } from "../users/edit-user";

export async function makeFactoryEditUserUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const editUserUseCase = new EditUserUseCase(prismaUserRepository)

  return editUserUseCase
}