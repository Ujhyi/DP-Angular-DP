import {Component, inject} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MasterService} from '../../../service/master.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  masterSrv= inject(MasterService);
  router = inject(Router);
  constructor(private cdRef: ChangeDetectorRef) {}

  login() {
    this.masterSrv.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response && response.d === true) {
          this.message = 'Login Successful';
          localStorage.setItem('isLoggedIn', 'true');
          console.log('Attempting to navigate to home...');
          this.router.navigateByUrl('/home').then(() => {
            console.log('Navigation to home page was successful!');
            this.cdRef.detectChanges();
          }).catch((err) => {
            console.error('Navigation failed:', err);
          });
        } else {
          this.message = 'Login Failed';
          console.log('Login failed due to response.d being false:', response);
        }
      },
      (error) => {
        console.error('Login Error:', error);
        this.message = 'Error while logging in.';
      }
    );
  }
}
