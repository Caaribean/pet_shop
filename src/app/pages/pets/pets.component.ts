import { Component } from "@angular/core";
import { Pet } from "src/app/models/pet.model";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent {
 public pets = new Pet();
 
}
