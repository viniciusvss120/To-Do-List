import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from 'supertest'
// import { execSync } from "node:child_process";
import { app } from "src/serve";

describe('[POST] Create user', () => {
 
  beforeEach(async () => {
    await app.ready()
    
  })

  afterAll(async () => {
    await app.close();
  });
  it('shoud be abble to create a user', async () => {
    const response = await request(app.server)
      .post('/user')
      .send({
        name: 'Valdir Silva',
        email: 'valdir20@live.com',
        password: '123456'
      })

      expect(response.statusCode).toEqual(201)
  })
})