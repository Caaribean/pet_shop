import { Gender } from "../enums/gender";
import { Breed } from "../enums/breed";
import { Color } from "../enums/color"

export class Pet {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public gender: string,
        public age: number,
        public breed: string,
        public color: string,
        public vaccinated: boolean,
        public dewormed: boolean,
        public cert: boolean,
        public microchip: boolean,
        public location: string
    ) { }
}