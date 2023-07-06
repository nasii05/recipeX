import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/partials/footer/footer.component';

const routes: Routes = [
  {path:'/', component: LandingPageComponent},
  {path:'/footer', component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
