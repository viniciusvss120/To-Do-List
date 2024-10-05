import { DeleteSubTaskUseCase } from "../sub-task/delete-subtask";
import { PrismaSubTaskRepository } from "src/repository/prisma/prisma-sub-task-repository";

export async function makeFactoryDeleteSubTaskUseCase() {
  const prismaSubTaskRepository = new PrismaSubTaskRepository()

  const deleteSubTaskUseCase = new DeleteSubTaskUseCase(prismaSubTaskRepository)

  return deleteSubTaskUseCase
}