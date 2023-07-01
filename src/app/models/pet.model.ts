import { Gender } from "../enums/gender";
import { Breed } from "../enums/breed";
import { Color } from "../enums/color"

export class Pet {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public gender: Gender,
        public age: number,
        public breed: Breed,
        public color: Color,
        public vaccinated: boolean,
        public dewormed: boolean,
        public cert: boolean,
        public microchip: boolean,
        public location: string,
        public countOfCustomerImg: number = 5,
        public countOfPreviewImg: number = 3,
    ) { }
}