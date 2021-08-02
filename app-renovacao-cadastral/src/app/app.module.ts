import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const { injector } = this;
    // Criando elemento customizado no angular
    const ngCustomElement = createCustomElement(AppComponent, { injector });
    // Definir no registro do navegador
    customElements.define('app-renovacao-cadastral', ngCustomElement);
  }
}
