import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ResultComponent } from './components/result/result.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'user/signup', component: SignupComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/exam', component: AssessmentComponent},
  {path: 'user/profile', component: UserProfileComponent},
  {path: 'user/result', component:ResultComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
