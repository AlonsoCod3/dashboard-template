import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { HomeComponent } from '../../home/home.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasePagesComponent } from "../../../base-pages/base-pages.component";
import { TableComponent } from "../../../components/table/table.component";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, HomeComponent, JsonPipe, ReactiveFormsModule, FormsModule, BasePagesComponent, TableComponent],
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css',]
})
export class GeneralComponent implements OnInit{
  // @ViewChild("selector") col:ElementRef
  title:string = "Configuración general"
  titlePage:string = "Configuración"

  table:boolean
  colorpicker = ["#1098F7","#B89E97","#DECCCC"]
  pickColor = "#aa1f2b"
  values:Object
  url = "https://my.api.mockaroo.com/clientes?key=f23ee800"
  options:Object // opciones switch para activar

  constructor(private host: ElementRef<HTMLElement>,private http: HttpClient) {
    this.options = [
      {
        "id":"pruebas",
        "label":"Activar Pruebas",
      },
      {
        "id":"roles",
        "label":"Activar Roles",
      },
    ]
    this.table= true
  }
  ngOnInit(): void {
    this.getItems()
}

  selectColor(color:string){
    // console.log(this.col.nativeElement.closest(".main").style.background = color)
    // document.documentElement.style.setProperty(`--color`,color); // solo funciona con root
    // this.host.nativeElement.style.setProperty(`--color`,color); //  fucniona con variable host en un compoenent
    this.pickColor = color
    // console.log(document.documentElement)
  }
  getItems(){
    this.http.get(this.url).subscribe(
      data => {
        // console.log(data)
        this.values = data
      }
    )
  }
}
