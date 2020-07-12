import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormKeepComponent } from './form-keep/form-keep.component';
import { ListKeepComponent } from './list-keep/list-keep.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormKeepComponent,
    ListKeepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
