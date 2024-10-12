import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    JsonPipe
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  titles = [
    {"name":"TITULO", "key":"subscriptionInfo.affiliationChannel", "type":"map"},
    {"name":"NOMBRE", "key":"lastName", "type":"toplevel"},
    {"name":"PAIS","key":"id", "type":"toplevel"}
  ]

  options = true

  values = [
    {
        "id": "426b1a93-cdd5-48df-bf5b-af8e04dcd5ec",
        "createdAt": "2024-05-01 02:33:07.747800",
        "createdDate": "2024-05-01",
        "firstName": "Corilla",
        "lastName": "Breeze",
        "documentType": "dni",
        "documentNumber": "0294550135",
        "email": "cbreeze0@google.it",
        "phone": "8562378313",
        "clientName": "Breeze",
        "cardInfo": {
            "primary": {
                "cardNumber": "MzY1NDM0OTQ4MzkyMzM=",
                "cardNumberMask": "5002 35** **** 3045",
                "expiryDate": "202703",
                "binInfo": {
                    "cardBin": "692834",
                    "cardHolderName": "diners-club-international",
                    "cardBrand": "Marca 3",
                    "cardIssuer": "Banco de la Nacion",
                    "cardType": "mastercard"
                }
            }
        },
        "chargeInfo": {
            "id": "32b7afd7-a2f3-4a34-8575-91b4ffcc7e6d",
            "type": "Primer cobro fisico",
            "date": "2029-08-25"
        },
        "subscriptionInfo": {
            "affiliationChannel": "telefono",
            "affiliationStatus": "affiliate",
            "affiliationRequestDate": "2026-06-13"
        },
        "operationInfo": {
            "type": "unique",
            "amount": "90",
            "currency": "USD",
            "lastChargeRange": "Range 2",
            "amountRange": "Range 3",
            "amountPoints": "9",
            "cardTypePoints": "7",
            "frecuencyPoints": "5",
            "totalPoints": 21,
            "rankingDonate": "5 Estrella"
        },
        "type": "customer"
    },
    {
        "id": "001775ed-8afd-49e5-a51e-ffc0e41a0d1e",
        "createdAt": "2024-05-01 02:33:07.737683",
        "createdDate": "2024-05-01",
        "firstName": "Linell",
        "lastName": "Steer",
        "documentType": "ce",
        "documentNumber": "9757594091",
        "email": "lsteer1@cam.ac.uk",
        "phone": "5103162957",
        "clientName": "Steer",
        "cardInfo": {
            "primary": {
                "cardNumber": "MzYwNjI1Nzg3NzkwNzQ=",
                "cardNumberMask": "5002 35** **** 1830",
                "expiryDate": "202410",
                "binInfo": {
                    "cardBin": "079845",
                    "cardHolderName": "diners-club-international",
                    "cardBrand": "Marca 1",
                    "cardIssuer": "BCP",
                    "cardType": "mastercard"
                }
            },
            "additional": {
                "cardNumber": "NTAwNzY2NjAzMTE1MjAyOA==",
                "cardNumberMask": "3608 43** **** 87",
                "expiryDate": "202708",
                "binInfo": {
                    "cardBin": "417620",
                    "cardHolderName": "mastercard",
                    "cardBrand": "Marca 2",
                    "cardIssuer": "Interbank",
                    "cardType": "diners-club-international"
                }
            }
        },
        "chargeInfo": {
            "id": "73db0497-ee37-4b50-9a43-d7b198b36a27",
            "type": "Primer cobro fisico",
            "date": "2028-01-29"
        },
        "subscriptionInfo": {
            "affiliationChannel": "internet",
            "affiliationStatus": "disafiliated",
            "affiliationRequestDate": "2030-08-24"
        },
        "operationInfo": {
            "type": "unique",
            "amount": "80",
            "currency": "USD",
            "lastChargeRange": "Range 2",
            "amountRange": "Range 3",
            "amountPoints": "9",
            "cardTypePoints": "4",
            "frecuencyPoints": "2",
            "totalPoints": 15,
            "rankingDonate": "3 Estrella"
        },
        "type": "customer"
    },
    {
        "id": "f8f025d6-d3fa-4bcd-81f5-c0980734865f",
        "createdAt": "2024-05-01 02:33:07.712143",
        "createdDate": "2024-05-01",
        "firstName": "Adriaens",
        "lastName": "Smewin",
        "documentType": "ce",
        "documentNumber": "5171537798",
        "email": "asmewin2@surveymonkey.com",
        "phone": "1061552818",
        "clientName": "Smewin",
        "cardInfo": {
            "primary": {
                "cardNumber": "MzY5ODY5ODYwMDgyMTU=",
                "cardNumberMask": "3608 94** **** 88",
                "expiryDate": "202708",
                "binInfo": {
                    "cardBin": "282280",
                    "cardHolderName": "diners-club-international",
                    "cardBrand": "Marca 3",
                    "cardIssuer": "Interbank",
                    "cardType": "diners-club-international"
                }
            }
        },
        "chargeInfo": {
            "id": "8095a9f1-b254-4770-a3c6-9474bcee3f19",
            "type": "Primer cobro en linea",
            "date": "2029-12-26"
        },
        "subscriptionInfo": {
            "affiliationChannel": "fisico",
            "affiliationStatus": "affiliate",
            "affiliationRequestDate": "2027-07-19"
        },
        "operationInfo": {
            "type": "monthly",
            "amount": "90",
            "currency": "PEN",
            "lastChargeRange": "Range 3",
            "amountRange": "Range 3",
            "amountPoints": "9",
            "cardTypePoints": "2",
            "frecuencyPoints": "9",
            "totalPoints": 20,
            "rankingDonate": "5 Estrella"
        },
        "type": "customer"
    },
  ]

  value_of_all_columns = "map" //tipo de formato de todas las columnas
  value_of_columns = [] //tipo de formato de cada columna referente a cantidad de titulos
  value_of_item_columns = [] //valor de cada columna
  values_exceptions = [] //valor de cada columna
  
  optionsValue = [
    // name = Nombre que se muestra en pantalla
    // list = Arreglo por si es un drop con opciones secundarias
    // exceptions = Referente a las opciones de "list", desactivar(opcion de "list") estas opciones
    // exceptions_values = Referente a las opciones de "list", para desactivar(columna, valor, opcion de "list") estas opciones
    { "name":"editar"},
    // { "name":"lista"},
    { "name":"lista", "list":[]},
    { "name":"opciones", "list":["desafiliar","revisar"], "exceptions":["editar"], "exceptionsValues":[ ["lastName" , "Steer", "editar"] ]} //["subscriptionInfo.affiliationChannel", "telefono"],
  ]

  constructor(private component:ElementRef){}

  ngOnInit(){

    for(var index in this.titles){
      this.value_of_columns.push(this.value_of_all_columns)
    }
    this.updateItems()
    console.log(this.value_of_item_columns);
    console.log(this.values_exceptions)
    
  }
  openDrop(item, index){
    let menu = this.component.nativeElement.querySelector(`#dropdown-content-${index}`)
    if(menu.classList.contains("d-block"))
      menu.classList.remove("d-block")
    else{
      menu.classList.add("d-block")
    }
    
  }

  obtainItem(index, title, value){    
    if (this.value_of_columns[index] == "map"){
      return eval("value."+title.key)
    }
    else if (this.value_of_columns[index] == "toplevel"){
      return value[title.key]
    }
    else {
      return value
    }
  }

  updateAllColumn(event){
    for(let index in this.value_of_columns){      
      this.value_of_columns[index]= event.target.value
      this.component.nativeElement.querySelector(`#typetable-${index}`).value = event.target.value
    }
    this.updateItems()
  }

  updateColumn(event, index){
    this.value_of_columns[index] = event.target.value
    this.updateItems()
  }

  updateItems(){
    this.value_of_item_columns = []
    for(let item in this.values){
      let row = {}
      for(let value of this.titles){
        row[value.name] = this.obtainItem(this.titles.indexOf(value),value,this.values[item])
      }
      this.values_exceptions[item] = this.obtain_values_exceptions(this.values[item])
      row["options"] = this.resolve_exceptions(item)
      
      this.value_of_item_columns.push(row)
    }
  }

  resolve_exceptions(id){
    let values_options = []
    for(let index in this.values_exceptions[id]){
      let row = {}
      let option = this.values_exceptions[id][index]
      if(Object.keys(option).length != 0){
        for(let item of this.optionsValue){
          if(item.list && item.list.length != 0){
            for(let itemList of item.list){
              if(item.exceptions && item.exceptionsValues){
                console.log(1);
                for(let exception_values of item.exceptionsValues){
                  row[exception_values[2]] = option.exceptions[exception_values[2]] && option.exceptions_values[exception_values[2]]
                }
              }
              else if(item.exceptions){
                console.log(2);
                row[itemList] = option.exceptions[itemList]
              }
              else if(item.exceptionsValues){
                console.log(3);
                for(let exception_values of item.exceptionsValues){
                  row[exception_values[2]] = option.exceptions_values[exception_values[2]]
                }
              }
              else{
                console.log(4);
                row[itemList] = true
              }
            }
          }
        }
      }
      values_options.push(row)
    }
    return values_options
  }

  obtain_values_exceptions(value){
    let items = []
    for(var option of this.optionsValue){
      let items_of_row = {} //valores para cada boton del item "value"
      
      // excepciones generales
      if(option.exceptions){
        items_of_row["exceptions"] = {}
        for(let itemList of option.list){
          if(option.exceptions[option.list.indexOf(itemList)] || option.exceptions.length == 0){
            items_of_row["exceptions"][itemList] = true
          }
          else{
            items_of_row["exceptions"][itemList] = false
          }
        }
      }
      // excepciones de valores especificos
      if(option.exceptionsValues){
        items_of_row["exceptions_values"] = {}
        let option_exceptions
        for(let index_exceptions in option.exceptionsValues){
          option_exceptions = option.exceptionsValues[index_exceptions]
          if(option_exceptions[0].includes(".") ){
            items_of_row["exceptions_values"][option_exceptions[2]] = !(eval("value."+option_exceptions[0]) == option_exceptions[1])
          }
          else{
            items_of_row["exceptions_values"][option_exceptions[2]] = !(value[option_exceptions[0]] == option_exceptions[1])
          }
        }
      }
      items.push(items_of_row)
    }
    return items
  }

}
