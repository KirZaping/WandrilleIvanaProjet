import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-title',
  standalone: true,
  templateUrl: './dynamic-title.component.html',
  styleUrl: './dynamic-title.component.css'
})
export class DynamicTitleComponent {
    @Input() title: string = '';
    @Input() words: string[] = [];
    currentWordIndex: number = 0;
    currentWord: string = '';

    ngOnInit() {
      this.currentWord = this.words[0];
    }

    changeWord() {
      console.log("change word");
    }
}
