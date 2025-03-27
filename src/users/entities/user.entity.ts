import { Exclude } from 'class-transformer';

export class User {
  id: number;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
