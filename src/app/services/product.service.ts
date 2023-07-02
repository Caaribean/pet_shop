import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductType } from '../enums/product-type';


@Injectable({
    providedIn: 'root',
})

export class ProductService {
    private allProducts: Product[] = [
        new Product(1, 'Dry food', 20, ProductType.Food),
        new Product(2, 'Wet food', 20, ProductType.Food),
        new Product(3, 'Frisbee', 50, ProductType.Toys),
        new Product(4, 'Ball', 45, ProductType.Toys),
        new Product(5, 'Cord', 45, ProductType.Toys),
        new Product(6, 'Mascot', 35, ProductType.Toys),
        new Product(7, 'Dog lead', 50, ProductType.Accesories),
        new Product(8, 'Cookies', 15, ProductType.Food),
        new Product(9, 'Cookies - bones', 18, ProductType.Food),
        new Product(10, 'Bowl', 22, ProductType.Accesories),
        new Product(11, 'Collar', 55, ProductType.Accesories),
        new Product(12, 'Bed for pets', 100, ProductType.Accesories),
        new Product(13, 'Dog clothes', 60, ProductType.Accesories),
        new Product(14, 'Dog brush', 28, ProductType.Accesories),
        new Product(15, 'Dog towel', 32, ProductType.Accesories),
        new Product(16, 'Vitamins', 15, ProductType.Food),
        new Product(17, 'Fetching wheel', 45, ProductType.Toys),
        new Product(18, 'Hair bow', 10, ProductType.Accesories),
    ];

    public getAllProducts(): Product[] {
        return this.allProducts;
    }

    public getProductById(id: number) {
        return this.allProducts.find(product => product.id === id);
    }

    public filterByColor(type: any): Product[] {
        return this.allProducts.filter(product => type.ProductType === type);
    }
}