import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { SponserComponent } from './sponser/sponser.component';
import { PreRegistrationComponent } from './pre-registration/pre-registration.component';


const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'faq-component', component: FaqComponent },
  { path: 'sponser-component', component: SponserComponent },
  { path: 'pre-registration-component', component: PreRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
