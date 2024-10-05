/* eslint-disable prettier/prettier */

import { Prisma, User as PrismaUser, } from '@prisma/client'
import { UniqueEntityId } from 'core/unique-entity-id'
import { User } from 'src/entity/user-entity'


export class PrismaUserMappers {
  static toDomain(raw: PrismaUser) {
    return User.create({
      name: raw.name,
      email: raw.email,
      password: raw.password,
    }, new UniqueEntityId(raw.id))
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
    }
  }

}
