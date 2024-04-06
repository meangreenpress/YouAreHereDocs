import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-coin-flipper',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './coin-flipper.component.html',
  styleUrl: './coin-flipper.component.css'
})
export class CoinFlipperComponent {
  sprite: string = "1"
  flipping: boolean = false;

  constructor() {
    this.flipping = false;
  }

  flipCoin() {
    this.flipping = true;
    this.sprite = "1";
    // Simulate animation by changing dice sprites randomly
    const interval = setInterval(() => {
      let number = Number(this.sprite)
      if (number === 8){
        this.sprite = "1";
      }
      else {
        this.sprite = String(number + 1);
      }
    }, 40); // Change sprites every 100 milliseconds
    setTimeout(() => {
      clearInterval(interval);
      // After animation, set final values and calculate total
      let result = this.flip()
      if (result === 1){
        this.sprite = "heads"
      }
      else {
        this.sprite = "tails"
      }
      this.flipping = false;
    }, 1000); // Animation duration: 1 second
  }

  flip(): number {
    return Math.floor(Math.random() * 2);
  }

  protected readonly Math = Math;
}

