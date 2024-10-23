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

  values_observable
  column_default: FormControl = new FormControl("default")
  default_switch: FormControl
  default_values = [
    {
      "id": "cdd5",
      "createdDate": "2022-05-01",
      "firstName": "Omar",
    },
    {
      "id": "ffc0e41a0d1e",
      "createdDate": "2021-05-01",
      "firstName": "Linell",
    },
    {
      "id": "4bcd",
      "createdDate": "2029-05-01",
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
    this.default_switch = new FormControl(this.values_default)
    for (let _ of this.titles) {
      this.value_of_columns.push(this.column_default.value)
    }

    if (this.default_switch.value) {
      this.show_data = this.default_values
      // this.updateItems()
      this.firstchargeItems()
    }
    else {
      this.values.subscribe(
        value => {
          this.show_data = value
          this.values_observable = value
          this.firstchargeItems()
        }
      )
      this.updateDefault()
    }

    this.updateDefaultColumns()
  }

  firstchargeItems() { //Crea matriz de datos de la primera carga
    this.value_of_item_columns = []
    for (let item of this.show_data) {
      let row = {}
      for (let title_index in this.titles) {
        row[title_index] = this.obtainItem(title_index, this.titles[title_index], item)
      }
      this.value_of_item_columns.push(row)
    }
  }

  updateDefault() { //Actualiza switch para mostrar data por defecto o data obtenida
    this.default_switch.valueChanges.subscribe(
      value => {
        this.values_default = value
        this.show_data = value ? this.default_values : this.values_observable
        this.updateItemsOfAllColumn()
      }
    )
  }

  openDrop(item: HTMLElement, index: string) {
    let menu = this.component.nativeElement.querySelector(`#dropdown-content-${index}`)
    menu.classList.contains("d-block") ? menu.classList.remove("d-block") : menu.classList.add("d-block")
  }

  updateColumn(event, index) { //Actualiza valor de typo de una sola columna
    this.value_of_columns[index] = event.target.value
    this.updateItemsOfColumn(index)
  }

  updateDefaultColumns() { //Actualiza valor de typo de todas las columnas
    this.column_default.valueChanges.subscribe(
      value => {
        this.value_of_columns.map((_, i) => { this.value_of_columns[i] = value })
        this.updateItemsOfAllColumn()
      }
    )
  }

  updateItemsOfColumn(index) { //Actualiza valores de una sola columna
    this.value_of_item_columns.map((row, i) => {
      row[index] = this.obtainItem(index, this.titles[index], this.show_data[i])
    })
  }

  updateItemsOfAllColumn() { //Actualiza valores de todas las columnas
    this.value_of_item_columns.map((row, i) => {
      this.value_of_columns.map((column, column_index) => {
        row[column_index] = this.obtainItem(column_index, this.titles[column_index], this.show_data[i])
      })
    })
  }

  obtainItem(index, title, value = this.show_data) {
    let notFound = `Not found : ${title.key}`
    if (this.value_of_columns[index] == "map") {
      try { return eval(`value.${title.key}`) }
      catch (e) { console.log(e.message); return notFound }
    }
    else if (this.value_of_columns[index] == "toplevel") {
      return title.key in value ? value[title.key] : notFound
    }
    else { return value ? value : notFound }
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
