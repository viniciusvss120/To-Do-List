import { FastifyInstance } from "fastify";
import { createSubTask2Controller } from "./create-sub-task2.controller";
import { deleteSubTask2Controller } from "./delete-sub-task2.controller";
import { editSubTask2Controller } from "./edit-sub-task2.controller";


export async function subTask2Routes(app: FastifyInstance){
  // app.get('/task/:status', )
  // app.get('/task/user/:userId', )
  app.post('/subtask2',{
    schema:{
    description: 'Criar uma sub-task2',
    tags: ['Create Sub-Task2'],
    body: {
      type: 'object',
      required: ['title', 'description', 'subTaskId'],
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        subTaskId: {type: 'string'}
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          title: {type: 'string'},
          description: {type: 'string'},
          status: {type: 'string'},
          subTaskId: {type: 'string'},
        }
      }
    }
  }}, createSubTask2Controller)
  app.put('/subtask2', editSubTask2Controller)
  app.delete('/subtask2/:id', deleteSubTask2Controller) 
}