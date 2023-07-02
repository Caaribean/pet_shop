import { ProductType } from "../enums/product-type";

export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public type: ProductType,
        public countOfProductImg: number = 2,
    ) { }
}