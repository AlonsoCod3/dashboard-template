import { Component, OnInit } from '@angular/core';
import { BasePagesComponent } from "../../base-pages/base-pages.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasePagesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title

  constructor() {
    this.title = "Bienvenido Usuari@"
    
  }
  
  ngOnInit(): void {}

}
