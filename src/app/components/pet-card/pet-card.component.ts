import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {
  @Input() pet: any;
  public photoUrl: string = '';

  ngOnInit() {
    this.photoUrl = '../assets/img/dog/' + this.pet.id + '/preview/1.png';
  }
}
