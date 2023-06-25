import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PetsComponent } from './pages/pets/pets.component';
import { PetProductsComponent } from './pages/pet-products/pet-products.component';
import { PetPreviewComponent } from './pages/pet-preview/pet-preview.component';
import { ShortListComponent } from './components/short-list/short-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pet-preview/:id', component: PetPreviewComponent },
  { path: 'pet-products', component: PetProductsComponent },
  { path: 'short-list', component: ShortListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
