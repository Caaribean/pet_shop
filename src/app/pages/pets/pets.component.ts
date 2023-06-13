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
    { name: 'Poodle', price: 400, gene: Gender.Female, age: 2, breed: Breed.Small, color: Color.Tan, vaccinated: true, dewormed: true, cert: true, microchip: true, location: 'Poland'},
    /* { name: 'Poodle1', gene: "Female", age: 2, price: 122 },
    { name: 'Poodle2', gene: "Male", age: 2, price: 67 },
    { name: 'Poodle3', gene: "Female", age: 3, price: 4040 },
    { name: 'Poodle4', gene: "Male", age: 2, price: 66 },
    { name: 'Poodle5', gene: "Female", age: 4, price: 234 }, */
  ]
}
