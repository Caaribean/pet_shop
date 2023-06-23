import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {
  @Input() pet: any;
  public photoUrl: string = '';

  ngOnInit() {
  this.photoUrl = `../assets/img/dog/${this.pet.id}/preview/1.png`;  
  }
}
