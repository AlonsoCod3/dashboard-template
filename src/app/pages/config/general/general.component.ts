import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
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
  title:string = "Configuración general"
  titlePage:string = "Configuración"

  table:boolean
  colorpicker = ["#1098F7","#B89E97","#DECCCC"]
  pickColor = "#aa1f2b"
  @Output() values =new EventEmitter<any>()
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
    // this.getItems()
  }
  // ngAfterViewInit(){
  // }

  targetData:any
  parent:any
  onDragStart(e){
    this.targetData = e
    this.parent = this.targetData.target.parentNode
  }
  onDrag(e){
    e.preventDefault()
    if (e.target != this.targetData.target){
      if (e.clientY > this.targetData.clientY){ // item hacia abajo
        if(e.target.nextElementSibling){
          this.parent.insertBefore(this.targetData.target, e.target.nextElementSibling)
        }
        else{
          this.parent.after(this.targetData.target)
        }
      }
      else{ // item hacia arriba
        this.parent.insertBefore(this.targetData.target, e.target)
      }
    }
  }
  onDragEnd(e){
    e.preventDefault()
    console.log("fin")
    this.targetData.target.classList.remove("active")
    this.targetData = ""
    this.parent = ""
  }
  onDrop(e){
    e.preventDefault()
  }
  onDragLeave(e){
    e.preventDefault()
  }
  valueColumns
  createColumns(input){
    if (Number(input.value)){
      let numberOfColumns = Number(input.value)
      if (this.valueColumns){
        if(numberOfColumns > this.valueColumns.length){//mayor
          let newValue = (numberOfColumns - this.valueColumns.length)
          for(let row = 0; row < newValue; row ++){
            this.valueColumns.push("Column")
          }
        }
        else if(numberOfColumns < this.valueColumns.length){//menor
          let newValue = (this.valueColumns.length - numberOfColumns)
          for(let row = 0; row < newValue; row ++){
            this.valueColumns.pop()
          }
        }
      }
      else {
        let rowo:Array<string> = []
        for(let row = 0; row < numberOfColumns; row ++){
          rowo.push("Column")
        }
        this.valueColumns = rowo
      }
    }
  }
  editColumn(button:any, input:any, index:any){
    button.setAttribute("hidden", "")
    input.removeAttribute("hidden")
    input.focus()
    input.select()
  }
  setColumn(button:any, input:any, index:any){
    this.valueColumns[index] =  input.value
    input.setAttribute("hidden", "")
    button.removeAttribute("hidden")
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
        this.values.emit(data)
      }
    )
  }
  // log(event){
  //   console.log(event)
  //   console.log(event.target.getBoundingClientRect())
  //   event.target.style.setProperty('transform', 'translate(0,)')
  //   let active = document.querySelector(".item_drag.active") as HTMLElement
  //   console.log(active)
  //   console.log(active.style)
  // }

}
