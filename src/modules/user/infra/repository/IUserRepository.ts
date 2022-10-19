import { ICreateUser } from '../../domain/ICreateUser';
import { IUser } from '../../domain/IUser';

export interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create({ email, password }: ICreateUser): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
  findOne(id: string): Promise<IUser | null>;
  remove(user: IUser): Promise<void>;
  find(): Promise<IUser[]>;
}
