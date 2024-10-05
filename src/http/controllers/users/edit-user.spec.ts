import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from 'supertest'
// import { execSync } from "node:child_process";
import { app } from "src/serve";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient()
describe('[PUT] Edit user', () => {
 
  beforeEach(async () => {
    await app.ready()
    
  })

  afterAll(async () => {
    await app.close();
  });
  it('shoud be abble to edit a user', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Mamphis Silva',
        email: 'man320@live.com',
        password: await hash('123456', 8)
      }
    })

    const response = await request(app.server)
      .put('/user')
      .send({
        id: user.id,
        email: 'valdir220@live.com',
        password: '123456'
      })

      expect(response.statusCode).toEqual(204)
      // expect(
      //   await prisma.user.findUnique({
      //     where: {
      //       id: '7e633d8a-5065-47cb-a0d4-9cc0bb422082'
      //     }
      //   })
      // ).toEqual(
      //   expect.objectContaining({
      //     email: 'valdir220@live.com'
      //   })
      // )
  })
})