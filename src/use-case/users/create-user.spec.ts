
import { InMemoryUser } from '../../repository/in-memory/in-memory-user'
import {beforeEach, describe, expect, it} from 'vitest'
import { CreateUserUseCase } from './create-user'

let inMemoryUser: InMemoryUser
let sut: CreateUserUseCase
describe('Create user', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUser()

    sut = new CreateUserUseCase(inMemoryUser)
  })
  it('shoud be abble to create a user', async () => {
    await sut.execute({
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    })

    expect(inMemoryUser.items).toHaveLength(1)
  })
})