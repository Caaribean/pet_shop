import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
    
    images: string[] = [
        `../assets/img/dog/1/customer/1.png`,
        `../assets/img/dog/2/customer/2.png`,
        `../assets/img/dog/3/customer/3.png`,
        `../assets/img/dog/4/customer/4.png`,
        `../assets/img/dog/5/customer/5.png`
    ];

    carouselConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    constructor() { }

    ngOnInit(): void {
    }
}