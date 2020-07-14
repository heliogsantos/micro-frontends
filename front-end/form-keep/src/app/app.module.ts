import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Injector } from '@angular/core'

import { createCustomElement } from '@angular/elements'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const { injector } = this
    const element = createCustomElement(AppComponent, { injector })
    customElements.define('micro-form-keep', element)
  }
}
