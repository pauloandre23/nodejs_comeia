import { dataSource } from '../../../../../shared/infra/typeorm';
import { Repository } from 'typeorm';
import { ICreateUser } from '../../../domain/ICreateUser';
import { IUser } from '../../../domain/IUser';
import { IUserRepository } from '../../repository/IUserRepository';
import User from '../entities/User';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = dataSource.getRepository(User);
  }
  
  public async findById(id: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

 

  public async create({ email, password }: ICreateUser): Promise<User> {
    const userCreated = this.ormRepository.create({ email, password });

    await this.ormRepository.save(userCreated);

    return userCreated;
  }

  public async save(user: IUser): Promise<User> {
    const userSaved = await this.ormRepository.save(user);

    return userSaved;
  }

  public async findOne(id: string): Promise<User | null> {
    const userFound = await this.ormRepository.findOne({
      where: { id },
    });

    return userFound;
  }

  public async remove(user: User): Promise<void> {
    await this.ormRepository.remove(user);
  }

  public async find(): Promise<User[]> {
    const users = await this.ormRepository.find();
    return users;
  }
}

export default UsersRepository;
