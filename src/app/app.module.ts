import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstComponent } from './inst/inst.component';
import { InstlistComponent } from './instlist/instlist.component';

@NgModule({
  declarations: [
    AppComponent,
    InstComponent,
    InstlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
