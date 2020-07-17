import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Injector } from '@angular/core'
import { FormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { createCustomElement } from '@angular/elements'

import { AppComponent } from './app.component';
import { NoteFormComponent } from './components/note-form/note-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  /*
    ngDoBootstrap(): void {
      const { injector } = this
      const element = createCustomElement(AppComponent, { injector })
      customElements.define('micro-form-keep', element)
    }
  */
}
