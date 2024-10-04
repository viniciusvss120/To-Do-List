import { Task } from "src/entity/task-entity"


export interface TaskRepository {
  findbyId(id: string): Promise<Task | null>
  findbyUser(userId: string): Promise<Task[] | null>
  findbyStatus(status: string): Promise<Task[] | null>
  create(task: Task): Promise<void>
  save(task: Task): Promise<void>
  delete(id: string): Promise<void>
}