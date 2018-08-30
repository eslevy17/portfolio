import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from '../welcome/welcome.component';
import { MinimalComponent } from '../minimal/minimal.component';
import { TerminalComponent } from '../terminal/terminal.component';

const routes: Routes = [
    {path: 'minimal', pathMatch: 'full', component: MinimalComponent},
    {path: 'terminal', pathMatch: 'full', component: TerminalComponent},
    {path: '', pathMatch: 'full', component: WelcomeComponent},
]

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
