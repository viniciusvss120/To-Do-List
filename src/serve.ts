import fastify from 'fastify'
import jwt from '@fastify/jwt'
import { userRoutes } from './http/controllers/users/routes'
import { env } from './env'
import { taskRoutes } from './http/controllers/tasks/routes'

export const app = fastify()

app.register(jwt, {
  secret: env.SECRET_KEY,
})

app.register(userRoutes)
app.register(taskRoutes)

const port = env.PORT
app.listen({port}).then(() => console.log('Server running!'))