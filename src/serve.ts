import fastify from 'fastify'
import jwt from '@fastify/jwt'
import { userRoutes } from './http/controllers/users/routes'
import { env } from './env'
import { taskRoutes } from './http/controllers/tasks/routes'
import { subTaskRoutes } from './http/controllers/sub-task/routes'
import { subTask2Routes } from './http/controllers/sub-task2/routes'

export const app = fastify()

app.register(jwt, {
  secret: env.SECRET_KEY,
})

app.register(userRoutes)
app.register(taskRoutes)
app.register(subTaskRoutes)
app.register(subTask2Routes)

const port = env.PORT
app.listen({port}).then(() => console.log('Server running!'))