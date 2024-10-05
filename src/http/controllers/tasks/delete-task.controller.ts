import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryDeleteTaskUseCase } from "src/use-case/factory/make-factory-delete-task";
import { z } from "zod";

export async function deleteTaskController(req: FastifyRequest, reply: FastifyReply) {
  const taskSchema = z.object({
    id: z.string()
  })

  const {id} = taskSchema.parse(req.params)

  try {
    const deleteUseCase = await makeFactoryDeleteTaskUseCase()
    
    await deleteUseCase.execute({
      id
    })

    return reply.status(204).send()

  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}