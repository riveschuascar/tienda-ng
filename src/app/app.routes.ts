import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { UsersComponent } from './pages/users/users.component';
import { SignupComponent } from './elements/signup/signup.component';
import { UserInfoComponent } from './elements/user-info/user-info.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'store', component: StoreComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent},
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'profile/:id', component: UserProfileComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];
