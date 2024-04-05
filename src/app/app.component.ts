import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { PlaybookSheetComponent } from "./playbook-sheet/playbook-sheet.component";
import { DiceRollerComponent } from "./dice-roller/dice-roller.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PlaybookSheetComponent, DiceRollerComponent, RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'You Are Here Docs';
}
