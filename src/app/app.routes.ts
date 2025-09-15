import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

      { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: '' }

];
