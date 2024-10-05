import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryGetTaskByUserUseCase } from "src/use-case/factory/make-factory-get-task-by-user";
import { z } from "zod";

export async function getTaskByUserController(req: FastifyRequest, reply: FastifyReply) {
  const taskSchema = z.object({
    userId: z.string()
  })

  const {userId} = taskSchema.parse(req.params)

  try {
    const getUserUseCase = await makeFactoryGetTaskByUserUseCase()
    
    const users = await getUserUseCase.execute({
      userId
    })

    return reply.status(200).send(users)

  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}