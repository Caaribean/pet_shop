import { Component } from "@angular/core";
import { Breed } from "src/app/enums/breed";
import { Color } from "src/app/enums/color";
import { Gender } from "src/app/enums/gender";
import { Pet } from "src/app/models/pet.model";
import { PetService } from "src/app/services/pet.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent {
  public listOfPets: Pet[] = [];
  public listOfColors = Object.values(Color);
  public listOfBreeds = Object.values(Breed);
  public listOfGenders = Object.values(Gender);
  //to do listOfGenders
  //todo listOfBreeds 

  public filtersOfGender: string[] = [];
  public filtersOfBreed: string[] = [];
  public filtersOfColor: string[] = [];
  //filtry dla kolorów

  constructor(private petService: PetService) {
    this.listOfPets = this.petService.getAllPets();
    console.log(this.listOfColors)
    console.log(this.listOfBreeds)
  }

  updateFilters(value: string, listOfFiters: string[]) {
    if (listOfFiters.findIndex(x => x === value) !== -1) {
      listOfFiters = listOfFiters.filter(x => x !== value);
    } else {
      listOfFiters.push(value);
    }
  }

  filter() {
    this.listOfPets = this.petService.filter(this.filtersOfGender, this.filtersOfBreed, this.filtersOfColor);
  }

}
