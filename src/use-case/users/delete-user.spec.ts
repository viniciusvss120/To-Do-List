import { User } from 'src/entity/user-entity'
import { InMemoryUser } from 'src/repository/in-memory/in-memory-user'
import {beforeEach, describe, expect, it} from 'vitest'
import { DeleteUserUseCase } from './delete-user'


let inMemoryUser: InMemoryUser
let sut: DeleteUserUseCase
describe('Delete user', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUser()

    sut = new DeleteUserUseCase(inMemoryUser)
  })
  it('shoud be abble to delete a user', async () => {
    const user = User.create({
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    })

    await inMemoryUser.create(user)

    await sut.execute({
      id: user.id.toString()
    })

    expect(inMemoryUser.items).toHaveLength(0)
  })
})