import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pet } from "src/app/models/pet.model";

@Component({
    selector: 'app-pet-preview',
    templateUrl: './pet-preview.component.html',
    styleUrls: ['./pet-preview.component.scss']
})
export class PetPreviewComponent { 
    public id: string | null = '';
    public photoMainUrl: string = '';
    public photoOneUrl: string = '';
    public photoTwoUrl: string = ''; 
    public photoCustomerOneUrl: string = '';
    public photoCustomerTwoUrl: string = '';
    public photoCustomerThreeUrl: string = '';
    public photoCustomerFourUrl: string = '';
    public photoCustomerFiveUrl: string = '';

    public singlePet: any = new Pet();

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log(this.id);
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        console.log(this.route);

        this.photoMainUrl = `../assets/img/dog/${this.id}/preview/1.png`;
        this.photoOneUrl = `../assets/img/dog/${this.id}/preview/2.png`; 
        this.photoTwoUrl = `../assets/img/dog/${this.id}/preview/3.png`;  

        this.photoCustomerOneUrl = `../assets/img/dog/${this.id}/customer/1.png`;
        this.photoCustomerTwoUrl = `../assets/img/dog/${this.id}/customer/2.png`;
        this.photoCustomerThreeUrl = `../assets/img/dog/${this.id}/customer/3.png`;
        this.photoCustomerFourUrl = `../assets/img/dog/${this.id}/customer/4.png`;
        this.photoCustomerFiveUrl = `../assets/img/dog/${this.id}/customer/5.png`;

        this.singlePet = this.singlePet.getPetById(this.id);
        console.log(this.singlePet); 

        //Klaudia tak jak widzisz zmienna id posiada już id które nas interesuje :) 
        // stworz sobie zmienną ktora będzie przechowywac pieska, ktory będzię pobierany z funkcji getPetById (pet model)
    }
}  


