import { PrismaSubTask2Repository } from "src/repository/prisma/prisma-sub-task2-repository"
import { EditSubTask2UseCase } from "../sub-task2/edit-subtask"


export async function makeFactoryEditSubTask2UseCase() {
  const prismaSubTask2Repository = new PrismaSubTask2Repository()

  const editSubTask2UseCase = new EditSubTask2UseCase(prismaSubTask2Repository)

  return editSubTask2UseCase
}