import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StoreComponent } from './pages/store/store.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { UsersComponent } from './pages/users/users.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'store', component: StoreComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'add-product', component: AddProductComponent },  // 👈 Asegúrate de tener esta línea
  { path: 'cart', component: CartComponent },
  { path: 'users', component: UsersComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];







