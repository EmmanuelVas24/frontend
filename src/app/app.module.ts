import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetdataComponent } from './getdata/getdata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [provideRouter(routes), 
    provideClientHydration(),provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
