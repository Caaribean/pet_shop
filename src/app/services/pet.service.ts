import { Injectable } from '@angular/core';
import { Breed } from '../enums/breed';
import { Color } from '../enums/color';
import { Gender } from '../enums/gender';
import { Pet } from '../models/pet.model';

@Injectable({
    providedIn: 'root',
})
export class PetService {
    private allPets: Pet[] = [
        new Pet(1, 'Poodle Yellow', 1200, Gender.Female, 3, Breed.Small, Color.Apricot, true, true, true, true, 'Londyn'),
        new Pet(2, 'Poodle Brown', 1500, Gender.Male, 3, Breed.Small, Color.Red, true, true, true, true, 'Londyn'),
        new Pet(3, 'Alaskan Malamute', 2500, Gender.Male, 12, Breed.Large, Color.BlackWhite, true, true, true, false, 'Liverpool'),
        new Pet(4, 'Poodle Black', 1700, Gender.Male, 3, Breed.Small, Color.Black, true, true, true, true, 'Londyn'),
        new Pet(5, 'Pomeranian', 3000, Gender.Female, 4, Breed.Small, Color.Apricot, true, true, true, true, 'Birmingham'),
        new Pet(6, 'Chihuahua Yellow', 1250, Gender.Female, 6, Breed.Small, Color.Tan, true, true, false, false, 'Bristol'),
        new Pet(7, 'Chihuahua Black', 1350, Gender.Male, 5, Breed.Small, Color.Black, true, true, false, false, 'Bristol'),
        new Pet(8, 'Maltese', 3200, Gender.Male, 5, Breed.Small, Color.Tan, true, true, false, true, 'Nottingham'),
        new Pet(9, 'Akita', 2000, Gender.Male, 10, Breed.Large, Color.Apricot, false, false, false, false, 'Sheffield'),
        new Pet(10, 'Beagle', 2200, Gender.Female, 7, Breed.Medium, Color.Apricot, true, false, true, true, 'Londyn'),
        new Pet(11, 'Border Collie', 1800, Gender.Female, 8, Breed.Medium, Color.BlackWhite, true, true, true, true, 'Bradford'),
        new Pet(12, 'Buldog Black-White', 1000, Gender.Male, 10, Breed.Medium, Color.BlackWhite, true, true, true, false, 'Bradford'),
        new Pet(13, 'Buldog Brown', 1100, Gender.Male, 12, Breed.Medium, Color.Apricot, true, true, true, false, 'Bradford'),
        new Pet(14, 'Spaniel', 2650, Gender.Female, 7, Breed.Medium, Color.Apricot, true, true, true, true, 'Sheffield'),
        new Pet(15, 'Doberman', 4000, Gender.Female, 10, Breed.Large, Color.Black, true, true, true, true, 'Nottingham'),
        new Pet(16, 'Golden Retriever Gold', 2500, Gender.Female, 14, Breed.Large, Color.Apricot, true, false, true, true, 'Birmingham'),
        new Pet(17, 'Jack Russel Terrier', 2770, Gender.Male, 10, Breed.Medium, Color.Tan, true, true, false, false, 'Bristol'),
        new Pet(18, 'Labrador Retriever', 2950, Gender.Female, 11, Breed.Large, Color.Black, true, true, true, true, 'Londyn'),
        new Pet(19, 'German Shepherd', 3700, Gender.Female, 15, Breed.Large, Color.Red, false, true, true, true, 'Bristol'),
        new Pet(20, 'Husky', 4000, Gender.Male, 10, Breed.Large, Color.Black, true, true, true, true, 'Southampton'),
        new Pet(21, 'Shih Tzu', 1890, Gender.Male, 3, Breed.Small, Color.Tan, true, true, true, true, 'Liverpool'),
        new Pet(22, 'Yorkshire Terrier', 2050, Gender.Male, 6, Breed.Small, Color.Red, true, true, true, true, 'Liverpool'),
        new Pet(23, 'Bernese Mountain', 2100, Gender.Male, 15, Breed.Large, Color.BlackWhite, true, true, false, false, 'Leeds'),
        new Pet(24, 'Dalmatian', 4000, Gender.Female, 10, Breed.Large, Color.BlackWhite, true, true, false, true, 'Manchester'),
        new Pet(25, 'Norfolk Terrier', 1500, Gender.Male, 11, Breed.Small, Color.Red, true, true, true, true, 'Bristol'),
        new Pet(26, 'Pembroke Welsh Corgi', 2500, Gender.Male, 12, Breed.Medium, Color.Apricot, true, true, true, false, 'Londyn'),
        new Pet(27, 'Rottweiler', 4060, Gender.Female, 10, Breed.Large, Color.Black, true, true, true, false, 'Bradford'),
        new Pet(28, 'Samoyed', 4000, Gender.Female, 10, Breed.Large, Color.Tan, true, true, true, true, 'Manchester'),
        new Pet(29, 'Shiba Inu', 3100, Gender.Male, 12, Breed.Medium, Color.Apricot, true, true, true, true, 'Newcastle'),
        new Pet(30, 'Golden Retriever White', 2450, Gender.Female, 13, Breed.Large, Color.Tan, true, false, true, true, 'Birmingham'),
    ];

    public getAllPets(): Pet[] {
        return this.allPets;
    }

    public getPetById(id: number) {
        return this.allPets.find(pet => pet.id === id);
    }

    public filterByColor(color: any): Pet[] {
        return this.allPets.filter(pet => pet.color === color);
    }

    public filterByBreed(breed: any) {
        return this.allPets.filter(pet => pet.breed === breed);
    }

    public filterByGender(gender: any) {
        return this.allPets.filter(pet => pet.gender === gender);
    }

    public getRequiredNumberPets(number: number) {
        return this.allPets.slice(0, number);
    }
} 