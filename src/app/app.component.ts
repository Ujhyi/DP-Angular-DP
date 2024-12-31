import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {SideNavComponent} from './pages/home/side-nav/side-nav.component';
import {CommonModule, NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavComponent, NgClass, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DP-Angular-FE';
  isCollapsed = false;

  constructor(private router: Router) {}

  isLoginOrChangePasswordPageOrRegisterPage(): boolean {
    return this.router.url.includes('login') || this.router.url.includes('change-password') || this.router.url.includes('register');
  }
  onCollapseChange(collapse: boolean) {
    this.isCollapsed = collapse;
  }
}
