// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AppRoutes } from './app.routes';
import { Routes } from '@angular/router';
import { Onboarding1Component } from './onboarding1/onboarding1.component';
import { Onboarding2Component } from './onboarding2/onboarding2.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SurveysComponent } from './surveys/surveys.component';
import { ResultsComponent } from './results/results.component';
import { NewsComponent } from './news/news.component';
import { SupportComponent } from './support/support.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/onboarding1', pathMatch: 'full' },
  { path: 'onboarding1', component: Onboarding1Component },
  { path: 'onboarding2', component: Onboarding2Component },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}