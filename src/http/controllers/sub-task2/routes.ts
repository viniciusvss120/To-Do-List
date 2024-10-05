import { FastifyInstance } from "fastify";
import { createSubTask2Controller } from "./create-sub-task2.controller";
import { deleteSubTask2Controller } from "./delete-sub-task2.controller";
import { editSubTask2Controller } from "./edit-sub-task2.controller";


export async function subTask2Routes(app: FastifyInstance){
  // app.get('/task/:status', )
  // app.get('/task/user/:userId', )
  app.post('/subtask2', createSubTask2Controller)
  app.put('/subtask2', editSubTask2Controller)
  app.delete('/subtask2/:id', deleteSubTask2Controller) 
}