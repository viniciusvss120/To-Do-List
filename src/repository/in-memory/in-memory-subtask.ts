import { SubTask } from "src/entity/subtask-entity"
import { SubtaskRepository } from "../subtask-repository"


export class InMemorySubtask implements SubtaskRepository {
  public items: SubTask[] = []


  async findbyStatus(status: string): Promise<SubTask[] | null> {
    const result = await this.items.filter(item => item.status === status)

    if (!result) {
      return null
    }

    return result
  }

  async findbyId(id: string): Promise<SubTask | null> {
    const result = await this.items.find(item => item.id.toString() === id)

    if (!result) {
      return null
    }

    return result
  }

  async findbyTaskId(taskId: string): Promise<SubTask[] | null> {
    const result = await this.items.filter(item => item.taskId === taskId)

    if (!result) {
      return null
    }

    return result
  }

  
  async create(subtask: SubTask): Promise<void> {
    await this.items.push(subtask)
  }

  async save(subtask: SubTask): Promise<void> {
    const findIndex = await this.items.findIndex((index) => index.id === subtask.id)
    
    if (findIndex === -1) {
      throw new Error('Subtask not found !!')
    }

    this.items[findIndex] = subtask
  }

  async delete(id: string): Promise<void> {
    const findIndex = await this.items.findIndex((index) => index.id.toString() === id)
    
    if (findIndex === -1) {
      throw new Error('Subtask not found !!')
    }

    this.items.splice(findIndex, 1)
  }
}