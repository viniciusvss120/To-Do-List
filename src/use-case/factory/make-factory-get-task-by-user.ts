
import { PrismaTaskRepository } from "src/repository/prisma/prisma-task-repository";
import { GetTaskByUserUseCase } from "../tasks/get-task-by-user";


export async function makeFactoryGetTaskByUserUseCase() {
  const prismaTaskRepository = new PrismaTaskRepository()

  const getTaskByUserUseCase = new GetTaskByUserUseCase(prismaTaskRepository)

  return getTaskByUserUseCase
}