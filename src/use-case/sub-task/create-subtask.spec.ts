
import { InMemorySubtask } from '../../repository/in-memory/in-memory-subtask'
import {beforeEach, describe, expect, it} from 'vitest'
import { CreateSubTaskUseCase } from './create-subtask'

let inMemorySubtask: InMemorySubtask
let sut: CreateSubTaskUseCase
describe('Create subTask', () => {
  beforeEach(() => {
    inMemorySubtask = new InMemorySubtask()

    sut = new CreateSubTaskUseCase(inMemorySubtask)
  })
  it('shoud be abble to create a subTask', async () => {
    await sut.execute({
      title: 'Fazer exercícios Node.js',
      description: 'Assistir video aula e colocar em prática.',
      status: 'pendente',
      taskId: 'task-1'
    })

    expect(inMemorySubtask.items).toHaveLength(1)
  })
})