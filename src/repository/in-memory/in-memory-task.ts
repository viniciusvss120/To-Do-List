import { Task } from "src/entity/task-entity"
import { TaskRepository } from "../task-repository"


export class InMemoryTask implements TaskRepository {
  public items: Task[] = []


  async findbyUser(userId: string): Promise<Task[] | null> {
    const result = await this.items.filter(item => item.userId === userId)

    if (!result) {
      return null
    }

    return result
  }

  async findbyStatus(status: string): Promise<Task | null> {
    const result = await this.items.find(item => item.status === status)

    if (!result) {
      return null
    }

    return result
  }

  async findbyId(id: string): Promise<Task | null> {
    const result = await this.items.find(item => item.id.toString() === id)

    if (!result) {
      return null
    }

    return result
  }

  
  async create(task: Task): Promise<void> {
    await this.items.push(task)
  }

  async save(task: Task): Promise<void> {
    const findIndex = await this.items.findIndex((index) => index.id === task.id)
    
    if (findIndex === -1) {
      throw new Error('Task not found !!')
    }

    this.items[findIndex] = task
  }

  async delete(id: string): Promise<void> {
    const findIndex = await this.items.findIndex((index) => index.id.toString() === id)
    
    if (findIndex === -1) {
      throw new Error('Task not found !!')
    }

    this.items.splice(findIndex, 1)
  }
}