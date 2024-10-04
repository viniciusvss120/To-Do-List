import { InMemoryUser } from 'src/repository/in-memory/in-memory-user'
import {beforeEach, describe, expect, it} from 'vitest'
import { EditUserUseCase } from './edit-user'
import { User } from 'src/entity/user-entity'


let inMemoryUser: InMemoryUser
let sut: EditUserUseCase
describe('Edit user', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUser()

    sut = new EditUserUseCase(inMemoryUser)
  })
  it('shoud be abble to edit a user', async () => {
    const user = User.create({
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    })

    await inMemoryUser.create(user)

    await sut.execute({
      id: user.id.toString(),
      email: 'vinicius100@live.com',
      password: '654321'
    })
    expect(inMemoryUser.items[0]).toEqual(
      expect.objectContaining({
        password: '654321'
      })
    )
  })
})