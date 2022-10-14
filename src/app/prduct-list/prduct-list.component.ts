import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-prduct-list',
  templateUrl: './prduct-list.component.html',
  styleUrls: ['./prduct-list.component.css']
})
export class PrductListComponent implements OnInit {

  products: any = products;
  constructor() { }

  ngOnInit(): void {
  }

}
