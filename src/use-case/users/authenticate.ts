import { compare } from "bcrypt";
import { UserRepository } from "src/repository/user-repository";

interface AuthenticateRequest {
  email: string
  password: string
}

type AuthenticateResponse = {
  token: string
}

export class AuthenticateUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    password
  }: AuthenticateRequest): Promise<AuthenticateResponse> {
    const user = await this.userRepository.findByEmail(email)

    if(!user) {
      throw new Error('User not found!')
    }

    const validatePassword = await compare(password, user.password)
    
    if(!validatePassword) {
      throw new Error('Password invalid!')
    }

    return {
      token: 'dmvfmçkfm dfn dfn kd'
    }
  }
}