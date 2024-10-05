import { hash } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryDeleteSubTaskUseCase } from "src/use-case/factory/make-factory-delete-sub-task";
import { makeFactoryDeleteSubTask2UseCase } from "src/use-case/factory/make-factory-delete-sub-task2";
import { z } from "zod";

export async function deleteSubTask2Controller(req: FastifyRequest, reply: FastifyReply) {
  const subtaskSchema = z.object({
    id: z.string()
  })

  const {id} = subtaskSchema.parse(req.params)

  try {
    const deleteUseCase = await makeFactoryDeleteSubTask2UseCase()
    
    await deleteUseCase.execute({
      id
    })

    return reply.status(204).send()
  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}