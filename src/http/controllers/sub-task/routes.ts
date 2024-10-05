import { FastifyInstance } from "fastify";
import { createSubTaskController } from "./create-sub-task.controller";
import { editSubTaskController } from "./edit-sub-task.controller";
import { deleteSubTaskController } from "./delete-sub-task.controller";

export async function subTaskRoutes(app: FastifyInstance){
  // app.get('/task/:status', )
  // app.get('/task/user/:userId', )
  app.post('/subtask', createSubTaskController)
  app.put('/subtask', editSubTaskController)
  app.delete('/subtask/:id', deleteSubTaskController) 
}