import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  currentProduct = {
    name: '',
    description: '',
    variants: []
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    let param = this.route.params['_value'];
    let id = param.id;  
    this.productService.read(id).subscribe(product =>
      {
        this.currentProduct = product;
        console.log(product);
      },
      error=> {
        console.log(error);
      })
  }

}
