import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavComponent} from './pages/nav-bar/side-nav/side-nav.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideNavComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DP-Angular-FE';

  isCollapsed = false;

  onCollapseChange(collapse: boolean) {
    this.isCollapsed = collapse;
  }
}
