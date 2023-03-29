import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    active: new FormControl(false),
  });

  constructor(
    private userService: UsersService,
    private modalService: ModalService
  ) {}

  close(): void {
    this.onClose.emit(true);
  }

  openModal() {
    this.modalService.openModal();
  }

  submit() {
    if (!this.form.valid) {
      return;
    }

    this.userService.addUser({
      name: this.form.value.name,
      active: this.form.value.active,
    });

    this.form.reset();
    this.close();
  }
}
