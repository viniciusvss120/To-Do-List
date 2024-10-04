import { User } from "src/entity/user-entity"
import { UserRepository } from "../user-repository"


export class InMemoryUser implements UserRepository {
  public items: User[] = []

  async findById(id: string): Promise<User | null> {
    const result = await this.items.find(item => item.id.toString() === id)

    if (!result) {
      return null
    }

    return result
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await this.items.find(item => item.email === email)

    if (!result) {
      return null
    }

    return result
  }

  
  async create(user: User): Promise<void> {
    await this.items.push(user)
  }

  async save(user: User): Promise<void> {
    const findIndex = await this.items.findIndex((index) => index.id === user.id)
    
    if (findIndex === -1) {
      throw new Error('User not found !!')
    }

    this.items[findIndex] = user
  }

  async delete(id: string): Promise<void> {
    const findIndex = await this.items.findIndex((index) => index.id.toString() === id)
    
    if (findIndex === -1) {
      throw new Error('User not found !!')
    }

    this.items.splice(findIndex, 1)
  }
}