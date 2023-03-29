import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs';
import { UsersStore, UserState } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UserState> {
  allUsers$ = this.selectAll();
  allActive$ = this.allUsers$.pipe(
    map((users) => {
      return (
        users.length < 5 &&
        (users.find((user) => user.active === false) ? false : true)
      );
    })
  );

  constructor(protected userStore: UsersStore) {
    super(userStore);
  }
}
