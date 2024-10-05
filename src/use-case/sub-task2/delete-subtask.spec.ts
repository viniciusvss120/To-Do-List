import {beforeEach, describe, expect, it} from 'vitest'
import { InMemorySubtask } from 'src/repository/in-memory/in-memory-subtask'
import { SubTask } from 'src/entity/subtask-entity'
import { DeleteSubTaskUseCase } from './delete-subtask'

let inMemorySubTask: InMemorySubtask
let sut: DeleteSubTaskUseCase
describe('Delete task', () => {
  beforeEach(() => {
    inMemorySubTask = new InMemorySubtask()

    sut = new DeleteSubTaskUseCase(inMemorySubTask)
  })
  it('shoud be abble to delete a task', async () => {
    const task1 = SubTask.create({
      title: 'Estudar Vue.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      taskId: 'task-2',
      createdAt: new Date()
    })
    await inMemorySubTask.create(task1)

    const task2 = SubTask.create({
      title: 'Estudar Node.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      taskId: 'task-1',
      createdAt: new Date()
    })
    await inMemorySubTask.create(task2)

    await sut.execute({
      id: task1.id.toString()
    })

    expect(inMemorySubTask.items).toHaveLength(1)
  })
})