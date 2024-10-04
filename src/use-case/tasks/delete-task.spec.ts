import { Task } from 'src/entity/task-entity'
import { InMemoryTask } from 'src/repository/in-memory/in-memory-task'
import {beforeEach, describe, expect, it} from 'vitest'
import { DeleteTaskUseCase } from './delete-task'


let inMemoryTask: InMemoryTask
let sut: DeleteTaskUseCase
describe('Delete task', () => {
  beforeEach(() => {
    inMemoryTask = new InMemoryTask()

    sut = new DeleteTaskUseCase(inMemoryTask)
  })
  it('shoud be abble to delete a task', async () => {
    const task1 = Task.create({
      title: 'Estudar Vue.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      userId: 'user-2',
      createdAt: new Date()
    })
    await inMemoryTask.create(task1)

    const task2 = Task.create({
      title: 'Estudar Node.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      userId: 'user-1',
      createdAt: new Date()
    })
    await inMemoryTask.create(task2)

    await sut.execute({
      id: task1.id.toString()
    })

    expect(inMemoryTask.items).toHaveLength(1)
  })
})