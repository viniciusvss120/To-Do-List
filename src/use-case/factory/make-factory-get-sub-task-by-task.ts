import { PrismaSubTaskRepository } from "src/repository/prisma/prisma-sub-task-repository";
import { GetSubTaskByTaskUseCase } from "../sub-task/get-subtask-by-task";


export async function makeFactoryGetTaskByUserUseCase() {
  const prismaSubTaskRepository = new PrismaSubTaskRepository()

  const getSubTaskByTaskUseCase = new GetSubTaskByTaskUseCase(prismaSubTaskRepository)

  return getSubTaskByTaskUseCase
}