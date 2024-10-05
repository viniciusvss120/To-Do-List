import { hash } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryDeleteSubTaskUseCase } from "src/use-case/factory/make-factory-delete-sub-task";
import { z } from "zod";

export async function deleteSubTaskController(req: FastifyRequest, reply: FastifyReply) {
  const subtaskSchema = z.object({
    id: z.string(),
  })

  const {id } = subtaskSchema.parse(req.params)

  try {
    const deleteUseCase = await makeFactoryDeleteSubTaskUseCase()
    
    await deleteUseCase.execute({
      id
    })

    return reply.status(204).send()
  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}