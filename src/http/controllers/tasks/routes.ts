import { FastifyInstance } from "fastify";
import { createTaskController } from "./create-task.controller";
import { editTaskController } from "./edit-task.controller";
import { deleteTaskController } from "./delete-task.controller";
import { getTaskByUserController } from "./get-task-by-user.controller";
import { getTaskByStatusController } from "./get-task-by-status.controller";

export async function taskRoutes(app: FastifyInstance){
  app.get('/task/:status', getTaskByStatusController)
  app.get('/task/user/:userId', getTaskByUserController)

  app.post('/task',{
    schema:{
    description: 'Cria uma nova task',
    tags: ['Create Task'],
    body: {
      type: 'object',
      required: ['title', 'description', 'userId'],
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        userId: {type: 'string'}
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          title: {type: 'string'},
          description: {type: 'string'},
          userId: {type: 'string'},
        }
      }
    }
  }}, createTaskController)

  app.put('/task',{
    schema:{
    description: 'Editar task',
    tags: ['Edit Task'],
    body: {
      type: 'object',
      required: ['id', 'title', 'description', 'status'],
      properties: {
        id: {type: 'string'},
        title: {type: 'string'},
        description: {type: 'string'},
        status: {type: 'string'}
      }
    },
    response: {
      204: {
        type: 'object',
        properties: {
          title: {type: 'string'},
          description: {type: 'string'},
          status: {type: 'string'},
          userId: {type: 'string'},
        }
      }
    }
  }}, editTaskController)
  app.delete('/task/:id', deleteTaskController)
}