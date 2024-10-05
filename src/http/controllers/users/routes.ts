import { FastifyInstance } from "fastify";
import { createUserController } from "./create-user.controller";
import { editUserController } from "./edit-user.controller";
import { deleteUserController } from "./delete-user.controller";
import { authenticateController } from "./authenticate.controller";

export async function userRoutes(app: FastifyInstance){
  app.post('/login', authenticateController)
  app.post('/user', createUserController)
  app.put('/user', editUserController)
  app.delete('/user/:id', deleteUserController)
}