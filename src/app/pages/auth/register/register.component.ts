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
      (response: boolean) => {
        console.log('Create user response:', response);

        this.userCreatedSucceess = response;

        if (response) {
          this.message = 'User Created Successfully';
          console.log('User successfully created!');
          this.username = '';
          this.password = '';
        } else {
          this.message = 'User Creation Failed';
          console.log('User creation failed.');
          this.username = '';
          this.password = '';
        }
      },
      (error) => {
        console.error('Create User Error:', error);
        this.message = 'Error while creating user. Please try again later.';
        this.username = '';
        this.password = '';
        this.userCreatedSucceess = false;
      }
    );
  }
}
