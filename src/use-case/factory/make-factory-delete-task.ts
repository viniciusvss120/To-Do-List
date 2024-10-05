import { PrismaTaskRepository } from "src/repository/prisma/prisma-task-repository";
import { DeleteTaskUseCase } from "../tasks/delete-task";

export async function makeFactoryDeleteTaskUseCase() {
  const prismaTaskRepository = new PrismaTaskRepository()

  const deleteTaskUseCase = new DeleteTaskUseCase(prismaTaskRepository)

  return deleteTaskUseCase
}