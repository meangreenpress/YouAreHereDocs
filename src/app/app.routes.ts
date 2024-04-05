import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PlaybookSheetComponent} from "./playbook-sheet/playbook-sheet.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: 'playbooks', component: PlaybookSheetComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
