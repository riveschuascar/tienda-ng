import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'store', component: StoreComponent }
];
