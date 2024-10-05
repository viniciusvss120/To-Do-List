import { Entity } from "core/entity";
import { UniqueEntityId } from "core/unique-entity-id";

interface TaskProps {
  id?: UniqueEntityId
  title: string
  description: string
  status: string
  userId: string
  subtask?: string[]
  createdAt: Date
  updatedAt?: Date | null
}

export class Task extends Entity<TaskProps> {
  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get status() {
    return this.props.status
  }

  get userId() {
    return this.props.userId
  }

  get subtask() {
    return this.props.subtask
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }
  
  update() {
    this.props.updatedAt = new Date()
  }



  set title(title: string) {
    this.props.title = title

    this.update()
  }

  set status(status: string) {
    this.props.status = status

    this.update()
  }

  set description(description: string ) {
    this.props.description = description ?? null

    this.update()
  }

  static create(props: TaskProps, id?: UniqueEntityId) {
    const task = new Task(props, id)
    return task
  }
}