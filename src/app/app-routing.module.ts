import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { MyrobotsComponent } from './myrobots/myrobots.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayComponent } from './play/play.component';
import { RobotsComponent } from './robots/robots.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 {path:'home',component:HomeComponent},
 {path:'robots',component:RobotsComponent},
 {path:'learn',component:LearnComponent},
 {path:'myrobots',component:MyrobotsComponent},
 {path:'play',component:PlayComponent},
 {path:'signin',component:SigninComponent},
 {path:'signup',component:SignupComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
