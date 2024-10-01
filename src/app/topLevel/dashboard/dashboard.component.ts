import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { NgClass } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    NgClass,
    SidebarComponent,
    FooterComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public sidebarExpanded:boolean
}
