import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent {
  @Input() question!: string;
  @Input() options!: string[];
  @Output() optionSelected = new EventEmitter<string>();

  selectedOption: string | null = null;

  selectOption(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }

}
