import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotsComponent } from './pages/bots/bots.component';
import { BotDetailsComponent } from './pages/bot-details/bot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BotsComponent,
    BotDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
