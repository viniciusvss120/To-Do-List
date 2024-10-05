
import { CreateSubTask2UseCase } from "../sub-task2/create-subtask"
import { PrismaSubTask2Repository } from "src/repository/prisma/prisma-sub-task2-repository"



export async function makeFactoryCreateSubTask2UseCase() {
  const prismaSubTask2Repository = new PrismaSubTask2Repository()

  const createSubTask2UseCase = new CreateSubTask2UseCase(prismaSubTask2Repository)

  return createSubTask2UseCase
}