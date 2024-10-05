import { hash } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryCreateTaskUseCase } from "src/use-case/factory/make-factory-create-task";
import { makeFactoryEditTaskUseCase } from "src/use-case/factory/make-factory-edit-task";
import { z } from "zod";

export async function editTaskController(req: FastifyRequest, reply: FastifyReply) {
  const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(["concluido", "pendente"]),
  })

  const {id, title, description, status} = taskSchema.parse(req.body)

  try {
    const editUseCase = await makeFactoryEditTaskUseCase()
    
    const editTask = await editUseCase.execute({
      id,
      title,
      description,
      status
    })

    console.log(editTask)
    if(editTask) {
      return reply.status(204).send()
    }
  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}