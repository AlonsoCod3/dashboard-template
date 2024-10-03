import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  public image:boolean = false

  @Input() isOpen: boolean = false
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();  

  public sidebarToggle(){
    this.isOpen = !this.isOpen
    this.toggleSidebar.emit(this.isOpen)
  }
}
