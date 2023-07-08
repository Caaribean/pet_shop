import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/product.model";
import { ProductType } from "src/app/enums/product-type";

@Component({
  selector: 'app-pet-products',
  templateUrl: './pet-products.component.html',
  styleUrls: ['./pet-products.component.scss']
})
export class PetProductsComponent {
  public listOfProducts: Product[] = [];
  public listOfProductType = Object.values(ProductType);

  public filtersOfProductType: string[] = [];
 
  constructor(private productService: ProductService) {
    this.listOfProducts = this.productService.getAllProducts();
  }

  updateFilters(value: string, listOfFiters: string[]) {
    if (listOfFiters.findIndex(x => x === value) !== -1) {
      listOfFiters = listOfFiters.filter(x => x !== value);
    } else {
      listOfFiters.push(value);
    }
  }

  filter() {
    this.listOfProducts = this.productService.filter(this.filtersOfProductType);
  }

}  