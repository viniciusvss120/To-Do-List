import { User } from "src/entity/user-entity"


export interface UserRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(user: User): Promise<void>
  save(user: User): Promise<void>
  delete(id: string): Promise<void>
}