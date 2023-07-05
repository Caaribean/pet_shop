import { Component, Input } from "@angular/core";
import { PetService } from "src/app/services/pet.service";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector: 'app-short-list',
    templateUrl: './short-list.component.html',
    styleUrls: ['./short-list.component.scss']
})
export class ShortListComponent {
    @Input() title: string = '';
    @Input() text: string = '';
    @Input() addClassButton: string = '';
    @Input() countOfItems: number = 0;
    @Input() countOfProducts: number = 0;

    constructor(public petService: PetService, public productService: ProductService) { }
}
