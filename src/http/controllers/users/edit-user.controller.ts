import { hash } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryEditUserUseCase } from "src/use-case/factory/make-factory-edit-user";
import { z } from "zod";

export async function editUserController(req: FastifyRequest, reply: FastifyReply) {
  const userSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    password: z.string()
  })

  const {id, email, password} = userSchema.parse(req.body)

  try {
    const editUseCase = await makeFactoryEditUserUseCase()
    console.log('passou aqui')
    
    const editUser = await editUseCase.execute({
      id,
      email,
      password: await hash(password, 8)
    })

    console.log(editUser)
    if(editUser) {
      return reply.status(204).send({editUser})
    }
  } catch (error) {
    console.log(error)
    reply.status(401).send(error)
  }

}