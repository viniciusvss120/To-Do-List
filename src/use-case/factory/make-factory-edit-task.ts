
import { PrismaTaskRepository } from "src/repository/prisma/prisma-task-repository";
import { EditTaskUseCase } from "../tasks/edit-task";

export async function makeFactoryEditTaskUseCase() {
  const prismaTaskRepository = new PrismaTaskRepository()

  const editTaskUseCase = new EditTaskUseCase(prismaTaskRepository)

  return editTaskUseCase
}