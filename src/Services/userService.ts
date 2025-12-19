import { User } from '../Entities/User';

export interface CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
}

export class UserService {
  async getAllUsers(): Promise<User[]> {
    try {
      return await User.findAll();
    } catch {
      throw new Error('Error fetching users');
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      return await User.findByPk(id);
    } catch {
      throw new Error('Error fetching user');
    }
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    try {
      return await User.create(userData);
    } catch {
      throw new Error('Error creating user');
    }
  }

  async updateUser(id: number, userData: Partial<CreateUserDto>): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
      return await user.update(userData);
    } catch {
      throw new Error('Error updating user');
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return false;
      }
      await user.destroy();
      return true;
    } catch {
      throw new Error('Error deleting user');
    }
  }
}
