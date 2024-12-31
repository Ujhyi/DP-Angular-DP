import {Component, inject} from '@angular/core';
import {MasterService} from '../../../service/master.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  userCreatedSucceess: boolean | null = null;

  masterSrv= inject(MasterService);

  createUser() {
    this.masterSrv.createUser(this.username, this.password).subscribe(
      (response) => {
        if (response) {
          this.message = 'User created successfully.';
          this.userCreatedSucceess = true;
          this.username = '';
          this.password = '';
        } else {
          this.message = 'Username already exists.';
          this.userCreatedSucceess = false;
          this.username = '';
          this.password = '';
        }
      },
      (error) => {
        this.message = 'Error creating user/';
      }
    )
  }
}
