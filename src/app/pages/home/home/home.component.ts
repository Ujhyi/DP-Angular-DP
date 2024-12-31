import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MasterService} from '../../../service/master.service';

@Component({
  selector: 'app-home',
    imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  masterSrv = inject(MasterService);
  router = inject(Router);
  constructor(private cdRef: ChangeDetectorRef) {}



  logout() {
      // Clear the login state
      localStorage.removeItem('isLoggedIn');
      console.log('User logged out');

      // Optionally, you can also navigate to the login page after logging out
      this.router.navigateByUrl('/login').then(() => {
        console.log('Navigation to login page was successful!');
        this.cdRef.detectChanges();
      }).catch((err) => {
        console.error('Navigation failed:', err);
      });
    }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  protected readonly localStorage = localStorage;
}
