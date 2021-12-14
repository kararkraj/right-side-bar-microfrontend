import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from "@angular/elements";

import { AppComponent } from './app.component';
import { MemoryMeterComponent } from './memory-meter/memory-meter.component';
import { MemoryMeterModule } from './memory-meter/memory-meter.module';

const local = true;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MemoryMeterModule
  ],
  providers: [],
  bootstrap: [local ? AppComponent : []],
  entryComponents: [MemoryMeterComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const rightSideBar = createCustomElement(MemoryMeterComponent, { injector: this.injector });
    customElements.define('right-side-bar', rightSideBar);
  }

  ngDoBootstrap(appRef: ApplicationRef) { }
}
