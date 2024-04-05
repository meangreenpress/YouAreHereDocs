// dice-roller.component.ts
import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ]
})
export class DiceRollerComponent {
  dice1: number = 1;
  dice2: number = 3;
  subtotal: number = 0;
  total: number = 0;
  rolling: boolean = false;
  selectedModifier: number = 0; // Store the selected modifier separately
  pendingModifier: number = 0; // Store the pending modifier for the next roll
  statName: string = "";
  pastRolls: string[] = [];

  constructor() {
    this.rolling = false;
  }

  rollDice() {
    this.rolling = true;
    // Simulate animation by changing dice sprites randomly
    const interval = setInterval(() => {
      this.dice1 = this.roll();
      this.dice2 = this.roll();
    }, 100); // Change sprites every 100 milliseconds
    setTimeout(() => {
      clearInterval(interval);
      // After animation, set final values and calculate total
      this.subtotal = 0;
      this.total = 0;
      this.dice1 = this.roll();
      this.dice2 = this.roll();
      this.subtotal = this.dice1 + this.dice2;
      this.total = this.subtotal + this.pendingModifier; // Apply pending modifier
      this.logRoll(this.statName, this.dice1, this.dice2, this.pendingModifier, this.total)
      this.selectedModifier = this.pendingModifier; // Update selected modifier
      this.rolling = false;
    }, 1000); // Animation duration: 1 second
  }

  roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  applyModifier(modifier: number) {
    this.pendingModifier = modifier; // Store the selected modifier for the next roll
  }

  statRoll(stat: string, modifier?: number){
    if (typeof modifier !== "undefined") {
      this.applyModifier(modifier);
    }
    this.statName = stat;
    this.rollDice()
  }

  logRoll(stat: string, dice1: number, dice2: number, modifier: number, total: number){
    let time = new Date();
    let result = `[${time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}]: ${stat}: ${dice1} + ${dice2} + ${modifier} (mod) = ${total}`
    this.pastRolls.unshift(result)
    if (this.pastRolls.length > 30){
      this.pastRolls.pop();
    }
  }

  protected readonly Math = Math;
}
