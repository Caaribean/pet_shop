import { Component, EventEmitter, Output } from "@angular/core";
import { PriceRange } from "src/app/models/range.model";

@Component({
    selector: 'app-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.scss']
})
export class RangeInputComponent {
    @Output() onRangeChange: EventEmitter<PriceRange> = new EventEmitter();

    public minValue: number | null = null;
    public maxValue: number | null = null;

    onInputChange() {
        const range = new PriceRange(this.minValue, this.maxValue)
        this.onRangeChange.emit(range);
    }
}
