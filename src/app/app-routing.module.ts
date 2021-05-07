import { BotDetailsComponent } from './pages/bot-details/bot-details.component';
import { BotsComponent } from './pages/bots/bots.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BotsComponent },
  { path: 'details/:name', component: BotDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
