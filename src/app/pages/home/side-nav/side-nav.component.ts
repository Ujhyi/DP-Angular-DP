import {Component, Output, EventEmitter} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [
    NgClass,
    RouterLink,
    CommonModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  isCollapsed = false;
  @Output() collapseChange = new EventEmitter<boolean>();

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseChange.emit(this.isCollapsed);
  }

  closeMenu() {
    this.isCollapsed = true;
    this.collapseChange.emit(this.isCollapsed);
  }
}
