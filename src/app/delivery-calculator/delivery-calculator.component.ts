import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-calculator',
  templateUrl: './delivery-calculator.component.html',
  styleUrls: ['./delivery-calculator.component.css']
})
export class DeliveryCalculatorComponent implements OnInit {
    title : string = 'Калькулятор доставки';
    deliveryUSA: [any] = [
        { title: 'New Jersea', price: 150 },
        { title: 'Colorado', price: 400 }
    ];
    deliverySea : number = 850;
    deliverySeaFilishPort : number = 500;

  constructor() { }

  ngOnInit() {
  }

}
