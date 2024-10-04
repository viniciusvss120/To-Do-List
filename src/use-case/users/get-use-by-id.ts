import { User } from "src/entity/user-entity";
import { UserRepository } from "src/repository/user-repository";

interface GetUserRequest {
  id: string
}

type GetUserResponse = {
  user: User
}
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    id
  }:GetUserRequest): Promise<GetUserResponse> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error('User not found !')
    }

    return {
      user
    }
  }
}