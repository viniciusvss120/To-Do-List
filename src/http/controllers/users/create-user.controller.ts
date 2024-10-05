import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryUseCase } from "src/use-case/factory/make-factory-create-user";
import { CreateUserUseCase } from "src/use-case/users/create-user";
import { z } from "zod";

export async function createUserController(req: FastifyRequest, reply: FastifyReply) {
  const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
  })

  const {name, email, password} = userSchema.parse(req.body)

  try {
    const registerUseCase = await makeFactoryUseCase()

    await registerUseCase.execute({
      name,
      email,
      password
    })

  } catch (error) {
    reply.status(401).send(error)
  }

  return reply.status(201).send()
}