
import { PrismaTaskRepository } from "src/repository/prisma/prisma-task-repository";
import { GetTaskByStatusUseCase } from "../tasks/get-task-by-status";


export async function makeFactoryGetTaskByStatusUseCase() {
  const prismaTaskRepository = new PrismaTaskRepository()

  const getTaskByStatusUseCase = new GetTaskByStatusUseCase(prismaTaskRepository)

  return getTaskByStatusUseCase
}