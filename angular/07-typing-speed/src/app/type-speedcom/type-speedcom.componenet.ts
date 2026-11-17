import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-type-speedcom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './type-speedcom.component.html',
  styleUrls: ['./type-speedcom.component.css']
})
export class TypeSpeedcom {
  passage: string = "The Quick Brown Fox Jumped Over the log";
  finishedTxt: string = "";
  correctedText: string = "";
  currentIndex: number = 0;
  letter: string = "";
  correctClass: string | null = null;
  running: boolean = false;

  counter: number = 15;  
  totalTime: number = 15;
  wpm: number = 0;
  accuracyCount: number = 0;
  accuracyPercentage: number = 0;

  intervalId: any;


  onKeyPress(event: KeyboardEvent) {
    const key = event.key;


    if (key.length !== 1) return;

    this.letter = key;
    this.correctedText += key;

    if (this.passage[this.currentIndex] === key) {
      this.correctClass = "green";
    } else {
      this.correctClass = "red";
    }

    this.currentIndex++;
  }


  startTimer() {
    if (this.running) return;

    
    this.running = true;
    this.finishedTxt = "";
    this.correctedText = "";
    this.currentIndex = 0;
    this.letter = "";
    this.correctClass = null;
    this.accuracyCount = 0;
    this.accuracyPercentage = 0;
    this.wpm = 0;
    this.counter = this.totalTime;

    this.intervalId = setInterval(() => {
      this.counter--;

      if (this.counter === 0) {
        this.running = false;
        clearInterval(this.intervalId);
        this.checkPerformance();
      }
    }, 1000);
  }


  checkPerformance() {
    this.finishedTxt = this.correctedText;
    this.wpm = this.finishedTxt.length / (this.totalTime / 60);

   
    this.accuracyCount = 0;
    const length = Math.min(this.passage.length, this.finishedTxt.length);
    for (let i = 0; i < length; i++) {
      if (this.passage[i] === this.finishedTxt[i]) {
        this.accuracyCount++;
      }
    }

    this.accuracyPercentage = (this.accuracyCount / this.finishedTxt.length) * 100 || 0;
  }
}
