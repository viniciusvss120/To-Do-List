import { InMemoryTask } from 'src/repository/in-memory/in-memory-task'
import {beforeEach, describe, expect, it} from 'vitest'
import { Task } from 'src/entity/task-entity'
import { GetTaskByUserUseCase } from './get-task-by-user'


let inMemoryTask: InMemoryTask
let sut: GetTaskByUserUseCase
describe('Get task', () => {
  beforeEach(() => {
    inMemoryTask = new InMemoryTask()

    sut = new GetTaskByUserUseCase(inMemoryTask)
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

    const task2 = Task.create({
      title: 'Estudar Node.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      userId: 'user-1',
      createdAt: new Date()
    })
    await inMemoryTask.create(task2)

    const task3 = Task.create({
      title: 'Estudar Typescript.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      userId: 'user-1',
      createdAt: new Date()
    })

    await inMemoryTask.create(task3)

    const result = await sut.execute({
      userId: 'user-1',
    })

    expect(result.task).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Estudar Node.js',
        }),
        expect.objectContaining({
          title: 'Estudar Typescript.js',
        })
      ])
    )
  })
})