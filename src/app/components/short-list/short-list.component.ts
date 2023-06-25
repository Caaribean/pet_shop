import { Component } from "@angular/core";
import { Pet } from "src/app/models/pet.model";

@Component({
    selector: 'app-short-list',
    templateUrl: './short-list.component.html',
    styleUrls: ['./short-list.component.scss']
})
export class ShortListComponent {
    public pets = new Pet();
}
