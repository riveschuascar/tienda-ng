import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'store', component: StoreComponent },
    { path: 'details/:id', component: DetailsComponent},
    { path: 'profile', component: UserProfileComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: NotfoundComponent}
];
