import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
//
import { SubjectDashboardModule } from './subject-dashboard/subject-dashboard.module';
//
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular Modules
    BrowserModule,
    CommonModule,
    //Custom Modules
    SubjectDashboardModule
  ],
  bootstrap: [AppComponent]  //Bootstrapping of Component (only at root module)
})
export class AppModule{};