import { Entity } from "core/entity";
import { UniqueEntityId } from "core/unique-entity-id";

interface SubTaskProps {
  id?: UniqueEntityId
  title: string
  description: string
  status: string
  taskId: string
  subtask?: string[]
  createdAt: Date
  updatedAt?: Date | null
}

export class SubTask extends Entity<SubTaskProps> {
  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get status() {
    return this.props.status
  }

  get taskId() {
    return this.props.taskId
  }

  get subtask() {
    return this.props.subtask
  }

  get createdAt() {
    return this.props.createdAt
  }

  
  update() {
    this.props.updatedAt = new Date()
  }

  get updatedAt() {
    return this.props.updatedAt
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

  static create(props: SubTaskProps, id?: UniqueEntityId) {
    const task = new SubTask(props, id)
    return task
  }
}