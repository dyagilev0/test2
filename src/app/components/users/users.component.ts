import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersQuery } from 'src/app/services/users.query';
import { User } from 'src/app/types/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  users$ = this.usersQuery.allUsers$;

  constructor(
    private usersService: UsersService,
    private usersQuery: UsersQuery
  ) {}

  updateUser(id: string) {
    this.usersService.updateUser(id);
  }

  trackByFn(_: number, user: User) {
    return user.id;
  }
}
