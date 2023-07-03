import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
    selector: 'app-product-preview',
    templateUrl: './product-preview.component.html',
    styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent {
    public id: number | null = null;
    public previewPhotos: string[] = [];
    public firstPhoto: string = '';
    public singleProduct: Product | undefined = undefined;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));

        this.previewPhotos = [
            `../assets/img/products/${this.id}/1.png`,
            `../assets/img/products/${this.id}/2.png`,
        ];

        this.firstPhoto = this.previewPhotos[0];
        this.singleProduct = this.productService.getProductById(this.id);
    }

    public changeFirstPhoto(url: string) {
        this.firstPhoto = url;
    }
}   