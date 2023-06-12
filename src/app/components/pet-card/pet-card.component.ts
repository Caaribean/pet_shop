import { Component, Input } from "@angular/core";
import { Pet } from "src/app/models/pet.model";

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {
  @Input() pet: Pet | null = null;
}
