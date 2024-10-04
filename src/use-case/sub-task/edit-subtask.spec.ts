import {beforeEach, describe, expect, it} from 'vitest'
import { EditSubTaskUseCase } from './edit-subtask'
import { InMemorySubtask } from 'src/repository/in-memory/in-memory-subtask'
import { SubTask } from 'src/entity/subtask-entity'



let inMemoryTask: InMemorySubtask
let sut: EditSubTaskUseCase
describe('Get task', () => {
  beforeEach(() => {
    inMemoryTask = new InMemorySubtask()

    sut = new EditSubTaskUseCase(inMemoryTask)
  })
  it('shoud be abble to Get a task', async () => {
    const task1 = SubTask.create({
      title: 'Estudar Vue.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      taskId: 'task-2',
      createdAt: new Date()
    })
    await inMemoryTask.create(task1)

    const result = await sut.execute({
      id: task1.id.toString(),
      title: 'Estudar Vue.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'concluida',
    })


    expect(result.subtask).toEqual(
      expect.objectContaining({
        status: 'concluida',
      })
    )
  })
})