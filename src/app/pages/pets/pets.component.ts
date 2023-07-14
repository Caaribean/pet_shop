import { Component } from "@angular/core";
import { Breed } from "src/app/enums/breed";
import { Color } from "src/app/enums/color";
import { Gender } from "src/app/enums/gender";
import { Pet } from "src/app/models/pet.model";
import { PriceRange } from "src/app/models/range.model";
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

  public filtersOfGender: string[] = [];
  public filtersOfBreed: string[] = [];
  public filtersOfColor: string[] = [];

  public priceRange: PriceRange = new PriceRange(null, null);

  public pageNumber: number = 1;
  public pageSize: number = 6;

  constructor(private petService: PetService) {
    this.listOfPets = this.petService.getAllPets();
  }

  updateFilters(value: string, listOfFiters: string[]) {
    if (listOfFiters.findIndex(x => x === value) !== -1) {
      listOfFiters = listOfFiters.filter(x => x !== value);
    } else {
      listOfFiters.push(value);
    }
  }

  getRangeValue(event: PriceRange) {
    this.priceRange = event;
  }

  filter() {
    this.pageNumber = 1;
    this.listOfPets = this.petService.filter(this.filtersOfGender, this.filtersOfBreed, this.filtersOfColor, this.priceRange?.minValue, this.priceRange?.maxValue);
  }
}
