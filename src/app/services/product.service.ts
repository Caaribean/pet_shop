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
        new Product(7, 'Dog lead', 50, ProductType.Accessories),
        new Product(8, 'Cookies', 15, ProductType.Food),
        new Product(9, 'Cookies - bones', 18, ProductType.Food),
        new Product(10, 'Bowl', 22, ProductType.Accessories),
        new Product(11, 'Collar', 55, ProductType.Accessories),
        new Product(12, 'Bed for pets', 100, ProductType.Accessories),
        new Product(13, 'Dog clothes', 60, ProductType.Accessories),
        new Product(14, 'Dog brush', 28, ProductType.Accessories),
        new Product(15, 'Dog towel', 32, ProductType.Accessories),
        new Product(16, 'Vitamins', 15, ProductType.Food),
        new Product(17, 'Fetching wheel', 45, ProductType.Toys),
        new Product(18, 'Hair bow', 10, ProductType.Accessories),
    ];

    public filter(productsFilters: string[], minValue: number | null, maxValue: number | null): Product[] {
        return this.allProducts
            .filter(product => productsFilters.length ? productsFilters.findIndex(x => x === product.type) !== -1 : true)
            .filter(pet => minValue ? pet.price >= minValue : true)
            .filter(pet => maxValue ? pet.price <= maxValue : true);
    }

    public getAllProducts(): Product[] {
        return this.allProducts;
    }

    public getProductById(id: number) {
        return this.allProducts.find(product => product.id === id);
    }

    public getRequiredNumberProducts(number: number) {
        return this.allProducts.slice(0, number);
    }
}