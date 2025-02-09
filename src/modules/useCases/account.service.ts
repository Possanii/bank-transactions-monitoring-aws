import { User } from '@prisma/client';
import { IAccountRepository } from '../repositories/account.repository';

export interface IAccountService {
  createAccount(user: Pick<User, 'name' | 'email' | 'password'>): Promise<User>;
}

export class AccountService implements IAccountService {
  constructor(private readonly accountRepository: IAccountRepository) {}

  async createAccount(user: Pick<User, 'name' | 'email' | 'password'>): Promise<User> {
    return this.accountRepository.registry(user);
  }
}
