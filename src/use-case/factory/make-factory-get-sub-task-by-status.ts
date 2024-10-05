import { PrismaSubTaskRepository } from "src/repository/prisma/prisma-sub-task-repository";
import { GetSubTaskByStatusUseCase } from "../sub-task/get-subtask-by-status";


export async function makeFactoryGetSubTaskByStatusUseCase() {
  const prismaSubTaskRepository = new PrismaSubTaskRepository()

  const getSubTaskByStatusUseCase = new GetSubTaskByStatusUseCase(prismaSubTaskRepository)

  return getSubTaskByStatusUseCase
}