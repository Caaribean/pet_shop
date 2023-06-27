import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public howMuchPet: any;

  ngOnInit(): void {
    this.howMuchPet = this.howMuchPet.getRequiredNumberPets(0,8);
  }

}
