import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public isOpen:boolean = true
  public image:boolean = false

  public NAME:string = "Dashboard Template"

  // url - icon - nombre - sub
  public routes = [
    [ "", "not" ,"Inicio"  ],
    [ "menu-1", "not" ,"Menu lateral 1", [
      [ "sub-1", "not" ,"SubMenu 1"  ],
      [ "sub-2", "not" ,"SubMenu 2"  ],
    ]
    ],
  ]
}
