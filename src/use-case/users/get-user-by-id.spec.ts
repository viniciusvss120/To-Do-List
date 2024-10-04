import { InMemoryUser } from 'src/repository/in-memory/in-memory-user'
import {beforeEach, describe, expect, it} from 'vitest'
import { GetUserUseCase } from './get-use-by-id'
import { User } from 'src/entity/user-entity'


let inMemoryUser: InMemoryUser
let sut: GetUserUseCase
describe('Get user', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUser()

    sut = new GetUserUseCase(inMemoryUser)
  })
  it('shoud be abble to Get a user', async () => {
    const user = User.create({
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    })

    await inMemoryUser.create(user)

    await sut.execute({
      id: user.id.toString(),
    })

    expect(inMemoryUser.items[0]).toEqual(
      expect.objectContaining({
        name: 'Vinicius Silva',
      })
    )
  })
})