import { FastifyInstance } from "fastify";
import { createUserController } from "./create-user.controller";
import { editUserController } from "./edit-user.controller";
import { deleteUserController } from "./delete-user.controller";
import { authenticateController } from "./authenticate.controller";
import { z } from "zod";

export async function userRoutes(app: FastifyInstance){
  app.post('/login',{schema:{
    description: 'Faz o login do usuário e retorna um token',
    tags: ['login'],
    body: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: {type: 'string'},
        password: {type: 'string'}
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          token: {type: 'string'}
        }
      }
    }
  }}, authenticateController)

  app.post('/user',{
    schema:{
    description: 'Cria um novo usuário',
    tags: ['Create User'],
    body: {
      type: 'object',
      required: ['name', 'email', 'password'],
      properties: {
        name: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string'}
      }
    },
    response: {
      201: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          email: {type: 'string'},
          password: {type: 'string'},
        }
      }
    }
  }}, createUserController)

  app.put('/user',{
    schema:{
    description: 'Edita um usuário',
    tags: ['Editar User'],
    body: {
      type: 'object',
      required: ['id', 'email', 'password'],
      properties: {
        id: {type: 'string'},
        email: {type: 'string'},
        password: {type: 'string'}
      }
    },
    response: {
      204: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          email: {type: 'string'},
          password: {type: 'string'},
        }
      }
    }
  }}, editUserController)
  
  app.delete('/user/:id', deleteUserController)
}