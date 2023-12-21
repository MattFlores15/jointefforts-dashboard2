// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutes } from './app.routes';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { Onboarding2Component } from './onboarding2/onboarding2.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveysComponent } from './surveys/surveys.component';
import { ResultsComponent } from './results/results.component';
import { NewsComponent } from './news/news.component';
import { SupportComponent } from './support/support.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Onboarding1Component,
    Onboarding2Component,
    LoginComponent,
    HomepageComponent,
    SurveysComponent,
    ResultsComponent,
    NewsComponent,
    SupportComponent,
  ],
  imports: [
    AppComponent,
    BrowserModule,
    MatDialogModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
