import { hash } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryDeleteUserUseCase } from "src/use-case/factory/make-factory-delete-user";
import { z } from "zod";

export async function deleteUserController(req: FastifyRequest, reply: FastifyReply) {
  const userSchema = z.object({
    id: z.string(),
  })

  const {id} = userSchema.parse(req.params)

  try {
    const deleteUseCase = await makeFactoryDeleteUserUseCase()
    console.log('passou aqui')
    
    const deleteUser = await deleteUseCase.execute({
      id
    })

    console.log(deleteUser)
    if(deleteUser) {
      return reply.status(204).send()
    }
  } catch (error) {
    reply.status(401).send(error)
  }

}