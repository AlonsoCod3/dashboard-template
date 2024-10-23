import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input("values") values: Observable<any>
  @Input("default") values_default: boolean = true
  @Input("rowLoad") rowLoad: number = 2
  columnLoad: number

  column_default: FormControl = new FormControl("toplevel")
  default: FormControl
  default_values = [
    {
      "id": "426b1a93-cdd5-48df-bf5b-af8e04dcd5ec",
      "createdDate": "2024-05-01",
      "firstName": "Corilla",
    },
    {
      "id": "001775ed-8afd-49e5-a51e-ffc0e41a0d1e",
      "createdDate": "2024-05-01",
      "firstName": "Linell",
    },
    {
      "id": "f8f025d6-d3fa-4bcd-81f5-c0980734865f",
      "createdDate": "2024-05-01",
      "firstName": "Adriaens",
    },
  ]

  titles = [
    // {"name":"TITULO", "key":"subscriptionInfo.affiliationChannel", "type":"map"},
    // {"name":"NOMBRE", "key":"lastName", "type":"toplevel"},
    // {"name":"PAIS","key":"id", "type":"toplevel"}
    // { "name": "Id", "key": "id", "type": "toplevel" }, //title
    // { "name": "Fecha de Creación", "key": "createdDate", "type": "toplevel" },
    // { "name": "Nombre", "key": "clientInfo.firstName", "type": "toplevel" }
    { "name": "Id", "key": "id" }, //title
    { "name": "Fecha de Creación", "key": "createdDate" },
    { "name": "Nombre", "key": "clientInfo.firstName" }
  ]

  options = true

  show_data

  value_of_columns: Array<string> = [] //tipo de formato de cada columna referente a cantidad de titulos
  value_of_item_columns: Array<object> = [] //valor de cada columna

  optionsValue = [
    { "name": "editar" }, //option
    { "name": "opciones", "list": ["desafiliar", "editar"] }
  ]

  constructor(private component: ElementRef) {
    this.columnLoad = this.options ? this.titles.length + 1 : this.titles.length
  }

  ngOnInit() {
    this.default = new FormControl(this.values_default)

    if (this.default.value) {
      this.show_data = this.default_values
      this.updateItems()
    }
    else {
      this.values.subscribe(
        value => {
          this.show_data = value
          this.updateItems()
        }
      )
    }

    for (let _ of this.titles) {
      this.value_of_columns.push(this.column_default.value)
    }
    this.updateDefault()
    this.updateDefaultColumns()
  }
  updateDefaultColumns() {
    this.column_default.valueChanges.subscribe(
      value => {
        this.value_of_columns.map((_, i) => { this.value_of_columns[i] = value })
        this.updateItems()
      }
    )
  }
  updateDefault() {
    this.default.valueChanges.subscribe(
      value => {
        this.values_default = value
        if (value) {
          this.show_data = this.default_values
        }
        else {
          if (this.values != undefined) {
            this.show_data = this.values
          }
        }
      }
    )
  }
  openDrop(item: HTMLElement, index: string) {
    let menu = this.component.nativeElement.querySelector(`#dropdown-content-${index}`)
    menu.classList.contains("d-block") ? menu.classList.remove("d-block") : menu.classList.add("d-block")
  }
  obtainItem(index, title, value) {
    let notFound = `Not found : ${title.key}`
    if (this.value_of_columns[index] == "map") {
      return eval("value." + title.key) ? eval("value." + title.key) : notFound
    }
    else if (this.value_of_columns[index] == "toplevel") {
      return title.key in value ? value[title.key] : notFound
    }
    else {
      return value ? value : notFound
    }
  }
  updateColumn(event, index) {
    this.value_of_columns[index] = event.target.value
    this.updateItems()
  }
  updateItems() {
    this.value_of_item_columns = []
    for (let item of this.show_data) {
      let row = {}
      for (let value of this.titles) {
        row[value.name] = this.obtainItem(this.titles.indexOf(value), value, item)
      }
      this.value_of_item_columns.push(row)
    }
  }
  copyClip(item: HTMLElement, text: string) {
    // item.select(); // solo para input
    // item.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    item.style.background = "darkgrey"
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      item.style.background = ""
    }, 300);
  }

}
