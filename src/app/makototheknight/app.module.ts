import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './base-layout/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
