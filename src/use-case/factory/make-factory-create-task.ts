import { CreateTaskUseCase } from "../tasks/create-task";
import { PrismaTaskRepository } from "src/repository/prisma/prisma-task-repository";

export async function makeFactoryCreateTaskUseCase() {
  const prismaTaskRepository = new PrismaTaskRepository()

  const createTaskUseCase = new CreateTaskUseCase(prismaTaskRepository)

  return createTaskUseCase
}