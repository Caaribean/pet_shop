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
        /* public countOfCustomerImg: number = 5,
        public countOfPreviewImg: number = 3, */

    ) { }

   /*  private allPets = [
        { id: 1, name: 'Poodle Yellow', price: 1200, gender: Gender.Female, age: 3, breed: Breed.Small, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn' },
        { id: 2, name: 'Poodle Brown', price: 1500, gender: Gender.Male, age: 3, breed: Breed.Small, color: Color.Red, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn' },
        { id: 3, name: 'Alaskan Malamute', price: 2500, gender: Gender.Male, age: 12, breed: Breed.Large, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Liverpool' },
        { id: 4, name: 'Poodle Black', price: 1700, gender: Gender.Male, age: 3, breed: Breed.Small, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn' },
        { id: 5, name: 'Pomeranian', price: 3000, gender: Gender.Female, age: 4, breed: Breed.Small, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Birmingham' },
        { id: 6, name: 'Chihuahua Yellow', price: 1250, gender: Gender.Female, age: 6, breed: Breed.Small, color: Color.Tan, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Bristol' },
        { id: 7, name: 'Chihuahua Black', price: 1350, gender: Gender.Male, age: 5, breed: Breed.Small, color: Color.Black, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Bristol' },
        { id: 8, name: 'Maltese', price: 3200, gender: Gender.Male, age: 5, breed: Breed.Small, color: Color.Tan, vaccinated: true, dewormed: true, cert: false, microchip: true, location: 'Nottingham' },
        { id: 9, name: 'Akita', price: 2000, gender: Gender.Male, age: 10, breed: Breed.Large, color: Color.Apricot, vaccinated: false, dewormed: false, cert: false, microchip: false, location: 'Sheffield' },
        { id: 10, name: 'Beagle', price: 2200, gender: Gender.Female, age: 7, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: false, cert: true, microchip: true, location: 'Londyn' },
        { id: 11, name: 'Border Collie', price: 1800, gender: Gender.Female, age: 8, breed: Breed.Medium, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Bradford' },
        { id: 12, name: 'Buldog Black-White', price: 1000, gender: Gender.Male, age: 10, breed: Breed.Medium, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Bradford' },
        { id: 13, name: 'Buldog Brown', price: 1100, gender: Gender.Male, age: 12, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Bradford' },
        { id: 14, name: 'Spaniel', price: 2650, gender: Gender.Female, age: 7, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Sheffield' },
        { id: 15, name: 'Doberman', price: 4000, gender: Gender.Female, age: 10, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Nottingham' },
        { id: 16, name: 'Golden Retriever Gold', price: 2500, gender: Gender.Female, age: 14, breed: Breed.Large, color: Color.Apricot, vaccinated: true, dewormed: false, cert: true, microchip: true, location: 'Birmingham' },
        { id: 17, name: 'Jack Russel Terrier', price: 2770, gender: Gender.Male, age: 10, breed: Breed.Medium, color: Color.Tan, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Bristol' },
        { id: 18, name: 'Labrador Retriever', price: 2950, gender: Gender.Female, age: 11, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn' },
        { id: 19, name: 'German Shepherd', price: 3700, gender: Gender.Female, age: 15, breed: Breed.Large, color: Color.Red, vaccinated: false, dewormed: true, cert: true, microchip: true, location: 'Bristol' },
        { id: 20, name: 'Husky', price: 4000, gender: Gender.Male, age: 10, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Southampton' },
        { id: 21, name: 'Shih Tzu', price: 1890, gender: Gender.Male, age: 3, breed: Breed.Small, color: Color.Tan, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Liverpool' },
        { id: 22, name: 'Yorkshire Terrier', price: 2050, gender: Gender.Male, age: 6, breed: Breed.Small, color: Color.Red, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Liverpool' },
        { id: 23, name: 'Bernese Mountain', price: 2100, gender: Gender.Male, age: 15, breed: Breed.Large, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Leeds' },
        { id: 24, name: 'Dalmatian', price: 4000, gender: Gender.Female, age: 10, breed: Breed.Large, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: false, microchip: true, location: 'Manchester' },
        { id: 25, name: 'Norfolk Terrier', price: 1500, gender: Gender.Male, age: 11, breed: Breed.Small, color: Color.Red, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Bristol' },
        { id: 26, name: 'Pembroke Welsh Corgi', price: 2500, gender: Gender.Male, age: 12, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Londyn' },
        { id: 27, name: 'Rottweiler', price: 4060, gender: Gender.Female, age: 10, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Bradford' },
        { id: 28, name: 'Samoyed', price: 4000, gender: Gender.Female, age: 10, breed: Breed.Large, color: Color.Tan, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Manchester' },
        { id: 29, name: 'Shiba Inu', price: 3100, gender: Gender.Male, age: 12, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Newcastle' },
        { id: 30, name: 'Golden Retriever White', price: 2450, gender: Gender.Female, age: 13, breed: Breed.Large, color: Color.Tan, vaccinated: true, dewormed: false, cert: true, microchip: true, location: 'Birmingham' },
    ] */ 
}