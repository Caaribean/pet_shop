import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
    @Input() images: String[] | undefined;
    @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

    public interval = 2000;

    // onSlide(slideEvent: NgbSlideEvent) {
    //     if (
    //         this.unpauseOnArrow &&
    //         slideEvent.paused &&
    //         (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    //     ) {
    //         this.togglePaused();
    //     }
    //     if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    //         this.togglePaused();
    //     }
    // }

}