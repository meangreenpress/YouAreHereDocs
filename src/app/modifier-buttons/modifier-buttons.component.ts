// modifier-buttons.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modifier-buttons',
  standalone: true,
  imports: [],
  templateUrl: './modifier-buttons.component.html',
  styleUrl: './modifier-buttons.component.css'
})
export class ModifierButtonsComponent {
  @Output() modifierChanged = new EventEmitter<number>();

  constructor() { }

  changeModifier(modifier: number) {
    this.modifierChanged.emit(modifier);
  }
}
