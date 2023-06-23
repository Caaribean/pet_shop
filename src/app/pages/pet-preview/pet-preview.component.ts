import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-pet-preview',
    templateUrl: './pet-preview.component.html',
    styleUrls: ['./pet-preview.component.scss']
})
export class PetPreviewComponent {
    public id: string | null = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log(this.id); 
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        console.log(this.route)
        //Klaudia tak jak widzisz zmienna id posiada już id które nas interesuje :) 
        // stworz sobie zmienną ktora będzie przechowywac pieska, ktory będzię pobierany z funkcji getPetById (pet model)
    }
}  