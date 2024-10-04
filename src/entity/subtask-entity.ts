import { Entity } from "core/entity";
import { UniqueEntityId } from "core/unique-entity-id";

interface SubTaskProps {
  id?: UniqueEntityId
  title: string
  description?: string
  status: string
  subtask?: string[]
  createdAt: Date
  updatedAt: Date
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

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(props: SubTaskProps, id?: UniqueEntityId) {
    const task = new SubTask(props, id)
    return task
  }
}