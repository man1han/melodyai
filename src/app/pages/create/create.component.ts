import { Component, ViewChildren, QueryList } from '@angular/core';
import { CardSliderComponent } from './card-slider/card-slider.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  selectedChoices = {
    genre: '',
    tempo: '',
    mood: '',
    artist: ''
  };

  genreSelected(option: string) {
    this.selectedChoices.genre = option;
  }

  tempoSelected(option: string) {
    this.selectedChoices.tempo = option;
  }

  moodSelected(option: string) {
    this.selectedChoices.mood = option;
  }

  artistSelected(option: string) {
    this.selectedChoices.artist = option;
  }

  submit() {
    alert(JSON.stringify(this.selectedChoices));
  }
}

