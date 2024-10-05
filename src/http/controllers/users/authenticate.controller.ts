import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryAuthenticateUseCase } from "src/use-case/factory/make-factory-authenticate";
import { z } from "zod";

export async function authenticateController(req: FastifyRequest, reply: FastifyReply) {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string()
  })

  const { email, password} = userSchema.parse(req.body)

  try {
    const authenticateUseCase = await makeFactoryAuthenticateUseCase()

    const user = await authenticateUseCase.execute({
      email,
      password
    })

    const token = await reply.jwtSign({id: user.userId})
    
    return reply.status(200).send({
      token
    })
  } catch (error) {
    reply.status(401).send(error)
  }

  
}