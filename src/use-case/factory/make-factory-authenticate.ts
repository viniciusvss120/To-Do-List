
import { PrismaUserRepository } from "src/repository/prisma/prisma-user-repository";
import { AuthenticateUseCase } from "../users/authenticate";

export async function makeFactoryAuthenticateUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const authenticateUseCase = new AuthenticateUseCase(prismaUserRepository)

  return authenticateUseCase
}