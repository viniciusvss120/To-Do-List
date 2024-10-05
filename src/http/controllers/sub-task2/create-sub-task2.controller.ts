import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryCreateSubTask2UseCase } from "src/use-case/factory/make-factory-create-sub-task2";
import { z } from "zod";

export async function createSubTask2Controller(req: FastifyRequest, reply: FastifyReply) {
  const taskSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["concluido", "pendente"]).default("pendente"),
    taskId: z.string()
  })

  const {title, description, status, taskId} = taskSchema.parse(req.body)

  try {
    const subTaskUseCase = await makeFactoryCreateSubTask2UseCase()

    await subTaskUseCase.execute({
      title,
      description,
      status,
      taskId
    })

  } catch (error) {
    reply.status(401).send(error)
  }

  return reply.status(201).send()
}