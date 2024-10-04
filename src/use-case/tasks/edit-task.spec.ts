import { InMemoryTask } from 'src/repository/in-memory/in-memory-task'
import {beforeEach, describe, expect, it} from 'vitest'
import { Task } from 'src/entity/task-entity'
import { EditTaskUseCase } from './edit-task'



let inMemoryTask: InMemoryTask
let sut: EditTaskUseCase
describe('Get task', () => {
  beforeEach(() => {
    inMemoryTask = new InMemoryTask()

    sut = new EditTaskUseCase(inMemoryTask)
  })
  it('shoud be abble to Get a task', async () => {
    const task1 = Task.create({
      title: 'Estudar Vue.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      userId: 'user-2',
      createdAt: new Date()
    })
    await inMemoryTask.create(task1)

    const result = await sut.execute({
      id: task1.id.toString(),
      title: 'Estudar Vue.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'concluida',
    })


    expect(result.task).toEqual(
      expect.objectContaining({
        status: 'concluida',
      })
    )
  })
})