import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pet } from "src/app/models/pet.model";
import { PetService } from "src/app/services/pet.service";

@Component({
    selector: 'app-pet-preview',
    templateUrl: './pet-preview.component.html',
    styleUrls: ['./pet-preview.component.scss']
})
export class PetPreviewComponent {
    public id: number | null = null;
    public previewPhotos: string[] = [];
    public customersPhotos: string[] = [];
    public firstPhoto: string = '';
    public singlePet: Pet | undefined = undefined;

    constructor(private route: ActivatedRoute, private petService: PetService) { }

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.paramMap.get('id'));

        this.previewPhotos = [
            `../assets/img/dog/${this.id}/preview/1.png`,
            `../assets/img/dog/${this.id}/preview/2.png`,
            `../assets/img/dog/${this.id}/preview/3.png`
        ];
        this.customersPhotos = [
            `../assets/img/dog/${this.id}/customer/1.png`,
            `../assets/img/dog/${this.id}/customer/2.png`,
            `../assets/img/dog/${this.id}/customer/3.png`,
            `../assets/img/dog/${this.id}/customer/4.png`,
            `../assets/img/dog/${this.id}/customer/5.png`
        ];

        this.firstPhoto = this.previewPhotos[0];
        this.singlePet = this.petService.getPetById(this.id);
    }

    public changeFirstPhoto(url: string) {
        this.firstPhoto = url;
    }
}  