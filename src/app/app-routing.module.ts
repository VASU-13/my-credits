import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent} from './components/homepage/homepage.component'
import { LandingpageComponent } from './components/landingpage/landingpage.component'


const routes: Routes = [

  { path: 'users', component: HomepageComponent },
  { path: 'home',component: LandingpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
