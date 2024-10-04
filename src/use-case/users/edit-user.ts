import { User } from "../../entity/user-entity"
import { UserRepository } from "../../repository/user-repository"


interface EditUserRequest {
  id: string
  email: string
  password: string
}

type EditUserResponse = {
  user: User
}

export class EditUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute({
    id,
    email,
    password
  }: EditUserRequest): Promise<EditUserResponse> {

    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error('User not found !')
    }

    user.password = password
    user.email = email

    await this.userRepository.save(user)

    return {
      user
    }
  }
}