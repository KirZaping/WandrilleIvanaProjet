import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-title',
  standalone: true,
  templateUrl: './dynamic-title.component.html',
  styleUrl: './dynamic-title.component.css'
})
export class DynamicTitleComponent {
    @Input() public title: string = '';
    @Input() public words: string[] = [];
    private currentWordIndex: number = 0;
    public currentWord: string = '';

    ngOnInit() {
      this.currentWord = this.words[this.currentWordIndex];
    }

    changeWord() {
      console.log("change word");
    }
}
