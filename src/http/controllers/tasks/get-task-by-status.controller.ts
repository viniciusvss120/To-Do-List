import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryGetTaskByStatusUseCase } from "src/use-case/factory/make-factory-get-task-by-status";
import { z } from "zod";

export async function getTaskByStatusController(req: FastifyRequest, reply: FastifyReply) {
  const taskSchema = z.object({
    status: z.enum(["concluido", "pendente"]),
  })

  const {status} = taskSchema.parse(req.params)

  try {
    const getStatusUseCase = await makeFactoryGetTaskByStatusUseCase()
    
    const statuss = await getStatusUseCase.execute({
      status
    })

    return reply.status(200).send(statuss)

  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}