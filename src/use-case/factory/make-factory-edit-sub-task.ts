import { EditSubTaskUseCase } from "../sub-task/edit-subtask";
import { PrismaSubTaskRepository } from "src/repository/prisma/prisma-sub-task-repository";

export async function makeFactoryEditSubTaskUseCase() {
  const prismaSubTaskRepository = new PrismaSubTaskRepository()

  const editSubTaskUseCase = new EditSubTaskUseCase(prismaSubTaskRepository)

  return editSubTaskUseCase
}