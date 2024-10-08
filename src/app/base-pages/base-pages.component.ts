import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-pages',
  standalone: true,
  imports: [NgIf,NgFor,NgClass, ReactiveFormsModule, FormsModule],
  templateUrl: './base-pages.component.html',
  styleUrls: ['./base-pages.component.css']
})
export class BasePagesComponent {
  @Input("dataTable")dataTable:boolean
  @Input("color")color

  values:any

  titles = [
    {"name":"TITULO", "key":"subscriptionInfo.affiliationChannel", "type":"map"},
    {"name":"NOMBRE", "key":"lastName", "type":"toplevel"},
    {"name":"PAIS","key":"id", "type":"toplevel"}
    ]
  value_of_columns = [] //tipo de formato de cada columna referente a cantidad de titulos
  options = true
  optionsValue = [
    { "name":"editar"},
    {"name":"opciones", "list":["desafiliar","editar"] }
  ]
  url = "https://my.api.mockaroo.com/clientes?key=f23ee800"

  constructor(private http:HttpClient, private component:ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.component.nativeElement.querySelector(".main").setAttribute("style",`background-color: ${this.color}`)
    // .style.backgroundColor = this.color //


    if (this.dataTable == undefined){
      this.dataTable= true
    }
    
    this.values = [
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
    for(let i of this.titles){
      let item = {}
      item[i.name] = "default"
      this.value_of_columns.push(item)
    }
  }

  // Obtener datos de url
  getItems(){
    this.http.get(this.url).subscribe(
      data => {
        // console.log(data)
        this.values = data
      }
    )
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

}
