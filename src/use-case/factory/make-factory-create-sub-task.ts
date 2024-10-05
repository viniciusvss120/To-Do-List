import { PrismaSubTaskRepository } from "src/repository/prisma/prisma-sub-task-repository"
import { CreateSubTaskUseCase } from "../sub-task/create-subtask"



export async function makeFactoryCreateSubTaskUseCase() {
  const prismaSubTaskRepository = new PrismaSubTaskRepository()

  const createSubTaskUseCase = new CreateSubTaskUseCase(prismaSubTaskRepository)

  return createSubTaskUseCase
}