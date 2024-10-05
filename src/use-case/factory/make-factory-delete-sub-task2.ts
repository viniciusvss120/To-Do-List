import { DeleteSubTask2UseCase } from "../sub-task2/delete-subtask";
import { PrismaSubTask2Repository } from "src/repository/prisma/prisma-sub-task2-repository";

export async function makeFactoryDeleteSubTask2UseCase() {
  const prismaSubTaskRepository = new PrismaSubTask2Repository()

  const deleteSubTaskUseCase = new DeleteSubTask2UseCase(prismaSubTaskRepository)

  return deleteSubTaskUseCase
}