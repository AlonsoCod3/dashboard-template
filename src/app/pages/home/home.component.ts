import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
