import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { SponserComponent } from './sponser/sponser.component';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'faq-component', component: FaqComponent },
  { path: 'sponser-component', component: SponserComponent },
  { path: 'pre-registration-component', component: PreRegistrationComponent },
  { path: 'about-us-component', component: AboutUsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
