import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryCreateTaskUseCase } from "src/use-case/factory/make-factory-create-task";
import { CreateTaskUseCase } from "src/use-case/tasks/create-task";
import { z } from "zod";

export async function createTaskController(req: FastifyRequest, reply: FastifyReply) {
  const taskSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["concluido", "pendente"]).default("pendente"),
    userId: z.string()
  })

  const {title, description, status, userId} = taskSchema.parse(req.body)

  try {
    const registerUseCase = await makeFactoryCreateTaskUseCase()

    const task = await registerUseCase.execute({
      title,
      description,
      status,
      userId
    })
    return reply.status(201).send({
      task
    })

  } catch (error) {
    reply.status(401).send(error)
  }

  
}