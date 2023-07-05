import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    @Input() product: any;
    public photoUrl: string = '';

    ngOnInit() {
        this.photoUrl = `../assets/img/products/${this.product.id}/1.png`;
    }
}
