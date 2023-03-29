import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface UserState extends EntityState<User, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UserState> {
  constructor() {
    super();
    this.add([
      {
        id: '8ea5a63e-38b2-4a7c-b604-78bf930ccf8b',
        name: 'Ivan',
        active: true,
      },
      {
        id: 'ca1a7dce-4ecf-4dd8-b7b8-b0b1be2c5896',
        name: 'Jorhe',
        active: false,
      },
    ]);
  }
}
