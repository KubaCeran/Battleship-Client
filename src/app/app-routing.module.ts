import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'game', component: GameComponent },
  {path: '**', component: RulesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
