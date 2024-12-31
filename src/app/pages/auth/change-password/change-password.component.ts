import {Component, inject} from '@angular/core';
import {MasterService} from '../../../service/master.service';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  username: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  passwordChangeSuccess: boolean | null = null;
  errorMessage: string | null = null;

  masterSrv = inject(MasterService);
  router = inject(Router);

  onSubmit(): void {
    // Call the changePassword method from the service
    this.masterSrv.changePassword(this.username, this.oldPassword, this.newPassword).subscribe({
      next: (result: boolean) => {
        // Handle the response from the backend
        if (result) {
          this.passwordChangeSuccess = true;
          this.errorMessage = null;
          this.username = '';
          this.oldPassword = '';
          this.newPassword = '';
        } else {
          this.passwordChangeSuccess = false;
          this.errorMessage = 'Password change failed. Please check your credentials.';
          this.username = '';
          this.oldPassword = '';
          this.newPassword = '';
        }
      },
      error: (err) => {
        // Handle error from the HTTP request
        this.passwordChangeSuccess = false;
        this.errorMessage = 'An error occurred while changing your password.';
        console.error(err);
      }
    });
  }

  // Method to navigate to the login page
  goToLogin() {
    this.router.navigate(['/login']); // Adjust the path as per your login route
  }
}
