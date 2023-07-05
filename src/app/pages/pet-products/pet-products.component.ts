import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/product.model";

@Component({
  selector: 'app-pet-products',
  templateUrl: './pet-products.component.html',
  styleUrls: ['./pet-products.component.scss']
})
export class PetProductsComponent {
  public listOfProducts: Product[] = [];
 
  constructor(private productService: ProductService) {
    this.listOfProducts = this.productService.getAllProducts();
  }

}  