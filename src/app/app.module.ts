import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory/in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationComponent } from './dashboard/application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
