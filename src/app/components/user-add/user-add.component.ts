import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { UsersQuery } from 'src/app/services/users.query';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAddComponent {
  active$ = this.userQuery.allActive$;

  constructor(
    private userQuery: UsersQuery,
    private modalService: ModalService
  ) {}

  openModal() {
    this.modalService.openModal();
  }
}
