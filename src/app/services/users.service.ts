import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { UsersStore } from './users.store';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private usersStore: UsersStore) {}

  updateUser(id: string) {
    this.usersStore.update(id, (user) => {
      return {
        ...user,
        active: !user.active,
      };
    });
  }

  addUser(user: Omit<User , "id">) {
    this.usersStore.add({...user, id: uuidv4()});
  }
}
