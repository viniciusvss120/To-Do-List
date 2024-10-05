import { FastifyInstance } from "fastify";
import { createTaskController } from "./create-task.controller";
import { editTaskController } from "./edit-task.controller";
import { deleteTaskController } from "./delete-task.controller";
import { getTaskByUserController } from "./get-task-by-user.controller";
import { getTaskByStatusController } from "./get-task-by-status.controller";

export async function taskRoutes(app: FastifyInstance){
  app.get('/task/:status', getTaskByStatusController)
  app.get('/task/user/:userId', getTaskByUserController)
  app.post('/task', createTaskController)
  app.put('/task', editTaskController)
  app.delete('/task/:id', deleteTaskController)
}