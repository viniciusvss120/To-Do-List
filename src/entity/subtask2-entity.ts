import { Entity } from "core/entity";
import { UniqueEntityId } from "core/unique-entity-id";

interface SubTask2Props {
  id?: UniqueEntityId
  title: string
  description: string
  status: string
  subTaskId: string
  createdAt: Date
  updatedAt?: Date | null
}

export class SubTask2 extends Entity<SubTask2Props> {
  get title() {
    return this.props.title
  }

  get description() {
    return this.props.description
  }

  get status() {
    return this.props.status
  }

  // get taskId() {
  //   return this.props.taskId
  // }

  get subTaskId() {
    return this.props.subTaskId
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

  static create(props: SubTask2Props, id?: UniqueEntityId) {
    const task = new SubTask2(props, id)
    return task
  }
}