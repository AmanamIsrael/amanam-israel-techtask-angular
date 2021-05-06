import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotsComponent } from './pages/bots/bots.component';
import { BotDetailsComponent } from './pages/bot-details/bot-details.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HeaderComponent } from './components/header/header.component';
import { AllBotsComponent } from './components/all-bots/all-bots.component';

@NgModule({
  declarations: [
    AppComponent,
    BotsComponent,
    BotDetailsComponent,
    MenuBarComponent,
    FavouritesComponent,
    HeaderComponent,
    AllBotsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
