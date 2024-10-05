import fastify from 'fastify'
import jwt from '@fastify/jwt'
import { userRoutes } from './http/controllers/users/routes'
import { env } from './env'
import { taskRoutes } from './http/controllers/tasks/routes'
import { subTaskRoutes } from './http/controllers/sub-task/routes'
import { subTask2Routes } from './http/controllers/sub-task2/routes'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export const app = fastify()

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'to-do-task',
      description: 'Especificações da PAI para o back-end da aplicação to-do-task.',
      version: '1.0.0'
    }
  },
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

app.register(jwt, {
  secret: env.SECRET_KEY,
})

app.register(userRoutes)
app.register(taskRoutes)
app.register(subTaskRoutes)
app.register(subTask2Routes)

const port = env.PORT
app.listen({port}).then(() => console.log('Server running!'))