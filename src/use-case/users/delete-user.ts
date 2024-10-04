import { User } from "src/entity/user-entity"
import { UserRepository } from "src/repository/user-repository"


interface DeleteUserRequest {
  id: string
}

type DeleteUserResponse = {
  user: User
}

export class DeleteUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute({
    id,
  }: DeleteUserRequest): Promise<DeleteUserResponse> {

    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error('User not found !')
    }

    await this.userRepository.delete(id)

    return {
      user
    }
  }
}