import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  productList: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(rest => {
      this.productList = rest;
      console.log(this.productList);

      //this.productList.forEach( element => console.log(element.table) );

    })
  }

}
