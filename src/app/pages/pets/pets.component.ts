import { withInterceptors } from "@angular/common/http";
import { Component } from "@angular/core";
import { Breed } from "src/app/enums/breed";
import { Color } from "src/app/enums/color";
import { Gender } from "src/app/enums/gender";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent {
 

  public pets = [
    { name: 'Poodle Yellow', price: 1200, gene: Gender.Female, age: 3, breed: Breed.Small, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn'},
    { name: 'Poodle Sepia', price: 1500, gene: Gender.Male, age: 3, breed: Breed.Small, color: Color.Red, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn'},
    { name: 'Alaskan Malamute', price: 2500, gene: Gender.Male, age: 12, breed: Breed.Large, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Liverpool'},
    { name: 'Poodle Black', price: 1700, gene: Gender.Male, age: 3, breed: Breed.Small, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn'},
    { name: 'Pomeranian', price: 3000, gene: Gender.Female, age: 4, breed: Breed.Small, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Birmingham'},
    { name: 'Chihuahua Yellow', price: 1250, gene: Gender.Female, age: 6, breed: Breed.Small, color: Color.Tan, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Bristol'},
    { name: 'Chihuahua Black', price: 1350, gene: Gender.Male, age: 5, breed: Breed.Small, color: Color.Black, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Bristol'},
    { name: 'Maltese', price: 3200, gene: Gender.Male, age: 5, breed: Breed.Small, color: Color.Tan, vaccinated: true, dewormed: true, cert: false, microchip: true, location: 'Nottingham'},
    { name: 'Akita', price: 2000, gene: Gender.Male, age: 10, breed: Breed.Large, color: Color.Apricot, vaccinated: false, dewormed: false, cert: false, microchip: false, location: 'Sheffield'},
    { name: 'Beagle', price: 2200, gene: Gender.Female, age: 7, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: false, cert: true, microchip: true, location: 'Londyn'},
    { name: 'Border Collie', price: 1800, gene: Gender.Female, age: 8, breed: Breed.Medium, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Bradford'},
    { name: 'Buldog Black-White', price: 1000, gene: Gender.Male, age: 10, breed: Breed.Medium, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Bradford'},
    { name: 'Buldog Brown', price: 1100, gene: Gender.Male, age: 12, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Bradford'},
    { name: 'Spaniel', price: 2650, gene: Gender.Female, age: 7, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Sheffield'},
    { name: 'Spaniel', price: 2650, gene: Gender.Female, age: 7, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Sheffield'},
    { name: 'Doberman', price: 4000, gene: Gender.Female, age: 10, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Nottingham'},
    { name: 'Golden Retriever Gold', price: 2500, gene: Gender.Female, age: 14, breed: Breed.Large, color: Color.Apricot, vaccinated: true, dewormed: false, cert: true, microchip: true, location: 'Birmingham'},
    { name: 'Jack Russel Terrier', price: 2770, gene: Gender.Male, age: 10, breed: Breed.Medium, color: Color.Tan, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Bristol'},
    { name: 'Labrador Retriever', price: 2950, gene: Gender.Female, age: 11, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Londyn'},
    { name: 'German Shepherd', price: 3700, gene: Gender.Female, age: 15, breed: Breed.Large, color: Color.Red, vaccinated: false, dewormed: true, cert: true, microchip: true, location: 'Bristol'},
    { name: 'Husky', price: 4000, gene: Gender.Male, age: 10, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Southampton'},
    { name: 'Shih Tzu', price: 1890, gene: Gender.Male, age: 3, breed: Breed.Small, color: Color.Tan, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Liverpool'},
    { name: 'Yorkshire Terrier', price: 2050, gene: Gender.Male, age: 6, breed: Breed.Small, color: Color.Red, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Liverpool'},
    { name: 'Bernese Mountain', price: 2100, gene: Gender.Male, age: 15, breed: Breed.Large, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: false, microchip: false, location: 'Leeds'},
    { name: 'Dalmatian', price: 4000, gene: Gender.Female, age: 10, breed: Breed.Large, color: Color.BlackWhite, vaccinated: true, dewormed: true, cert: false, microchip: true, location: 'Manchester'},
    { name: 'Norfolk Terrier', price: 1500, gene: Gender.Male, age: 11, breed: Breed.Small, color: Color.Red, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Bristol'},
    { name: 'Husky', price: 4000, gene: Gender.Male, age: 10, breed: Breed.Large, color: Color.Black, vaccinated: false, dewormed: true, cert: true, microchip: true, location: 'Bristol'},
    { name: 'Pembroke Welsh Corgi', price: 2500, gene: Gender.Male, age: 12, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Londyn'},
    { name: 'Rottweiler', price: 4060, gene: Gender.Female, age: 10, breed: Breed.Large, color: Color.Black, vaccinated: true, dewormed: true, cert: true, microchip: false, location: 'Bradford'},
    { name: 'Samoyed', price: 4000, gene: Gender.Female, age: 10, breed: Breed.Large, color: Color.Tan, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Manchester'},
    { name: 'Shiba Inu', price: 3100, gene: Gender.Male, age: 12, breed: Breed.Medium, color: Color.Apricot, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Newcastle'},
    { name: 'Golden Retriever White', price: 2450, gene: Gender.Female, age: 13, breed: Breed.Large, color: Color.Tan, vaccinated: true, dewormed: false, cert: true, microchip: true, location: 'Birmingham'},
  ]
}
