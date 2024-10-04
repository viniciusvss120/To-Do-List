import { User } from "../../entity/user-entity"
import { UserRepository } from "../../repository/user-repository"


interface CreateUserRequest {
  name: string
  email: string
  password: string
}

type CreateUserResponse = {
  user: User
}

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute({
    name,
    email,
    password
  }: CreateUserRequest): Promise<CreateUserResponse> {

    const user = await User.create({
      name,
      email,
      password
    })

    await this.userRepository.create(user)

    return {
      user
    }
  }
}