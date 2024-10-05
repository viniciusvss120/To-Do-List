import { FastifyInstance } from "fastify";
import { createSubTaskController } from "./create-sub-task.controller";
import { editSubTaskController } from "./edit-sub-task.controller";
import { deleteSubTaskController } from "./delete-sub-task.controller";

export async function subTaskRoutes(app: FastifyInstance){
  // app.get('/task/:status', )
  // app.get('/task/user/:userId', )
  app.post('/subtask',{
    schema:{
    description: 'Criar uma sub-task',
    tags: ['Create Sub-Task'],
    body: {
      type: 'object',
      required: ['title', 'description', 'taskId'],
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        taskId: {type: 'string'}
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          title: {type: 'string'},
          description: {type: 'string'},
          status: {type: 'string'},
          taskId: {type: 'string'},
        }
      }
    }
  }}, createSubTaskController)
  app.put('/subtask',{
    schema:{
    description: 'Editar sub task',
    tags: ['Edit Sub Task'],
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
  }}, editSubTaskController)
  app.delete('/subtask/:id', deleteSubTaskController) 
}