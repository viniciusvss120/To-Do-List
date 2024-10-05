import { hash } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryEditSubTaskUseCase } from "src/use-case/factory/make-factory-edit-sub-task";
import { makeFactoryEditSubTask2UseCase } from "src/use-case/factory/make-factory-edit-sub-task2";
import { z } from "zod";

export async function editSubTask2Controller(req: FastifyRequest, reply: FastifyReply) {
  const subtaskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(["concluido", "pendente"]),
  })

  const {id, title, description, status} = subtaskSchema.parse(req.body)

  try {
    const editUseCase = await makeFactoryEditSubTask2UseCase()
    
    const editSubTask = await editUseCase.execute({
      id,
      title,
      description,
      status
    })

    if(editSubTask) {
      return reply.status(204).send()
    }
  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}