import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UsersComponent } from './components/users/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleControlComponent } from './components/toggle-control/toggle-control.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserAddComponent,
    ToggleControlComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
