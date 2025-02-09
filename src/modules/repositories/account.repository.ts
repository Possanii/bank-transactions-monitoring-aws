import { PrismaClient, User } from '@prisma/client';

export interface IAccountRepository {
  registry(user: Pick<User, 'name' | 'email' | 'password'>): Promise<User>;
}

export class AccountRepository implements IAccountRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async registry(user: Pick<User, 'name' | 'email' | 'password'>): Promise<User> {
    return await this.prisma.user.create({
      data: user
    });
  }
}
