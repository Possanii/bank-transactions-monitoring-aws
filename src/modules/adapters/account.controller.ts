import { IAccountService } from '../useCases/account.service';
import { type Request, type Response, type NextFunction } from 'express';
import { handleZodValidation } from '../../api/middlewares/handle-zod-validation';
import { accountSchema } from '../dto/account.dto';

export interface IAccountController {
  createAccount(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export class AccountController implements IAccountController {
  constructor(private readonly accountService: IAccountService) {}

  async createAccount(req: Request, res: Response): Promise<void> {
    const user = handleZodValidation(accountSchema, req.body);

    const userCreated = await this.accountService.createAccount(user);

    res.status(201).json(userCreated);
  }
}
