import { Component, Input } from "@angular/core";
import { Pet } from "src/app/models/pet.model";

@Component({
    selector: 'app-short-list',
    templateUrl: './short-list.component.html',
    styleUrls: ['./short-list.component.scss']
})
export class ShortListComponent {
    @Input() title: string = '';
    @Input() text: string = '';
    @Input() addClassButton: string = '';
    @Input() countOfItems: number = 0;
    
    public pets = new Pet();

}
