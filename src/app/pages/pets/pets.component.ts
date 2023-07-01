import { Component } from "@angular/core";
import { Color } from "src/app/enums/color";
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

  constructor(private petService: PetService) {
    this.listOfPets = this.petService.getAllPets();
    console.log(this.listOfColors)
  }

}
