
import { InMemoryTask } from '../../repository/in-memory/in-memory-task'
import {beforeEach, describe, expect, it} from 'vitest'
import { CreateTaskUseCase } from './create-task'

let inMemoryTask: InMemoryTask
let sut: CreateTaskUseCase
describe('Create task', () => {
  beforeEach(() => {
    inMemoryTask = new InMemoryTask()

    sut = new CreateTaskUseCase(inMemoryTask)
  })
  it('shoud be abble to create a task', async () => {
    await sut.execute({
      title: 'Estudar Node.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      userId: 'user-1'
    })

    expect(inMemoryTask.items).toHaveLength(1)
  })
})