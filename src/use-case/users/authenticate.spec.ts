import { InMemoryUser } from 'src/repository/in-memory/in-memory-user'
import {beforeEach, describe, expect, it} from 'vitest'
import { AuthenticateUseCase } from './authenticate'
import { User } from 'src/entity/user-entity'
import { hash } from 'bcrypt'


let inMemoryUser: InMemoryUser
let sut: AuthenticateUseCase
describe('Edit user', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUser()

    sut = new AuthenticateUseCase(inMemoryUser)
  })
  it('shoud be abble to edit a user', async () => {
    const user = User.create({
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: await hash('123456', 8)
    })

    await inMemoryUser.create(user)

    const result = await sut.execute({
      email: 'vinicius100@live.com',
      password: '123456'
    })

    expect(result).toEqual({
      token: expect.any(String)
    })
  })
})